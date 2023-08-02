import { useEffect, useMemo, useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";

export const CarouselItem: React.FC<any> = ({ children }) => (
  <div className="flex items-center justify-center">{children}</div>
);

export const Carousel: React.FC<any> = ({ children, itemsToShow = 1 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  
  const childrenGroups = useMemo(() => {
    const childrenArray: any = [];
    if (children?.length === 0) return childrenArray;
    for (let i = 0; i < children.length; i += itemsToShow) {
      childrenArray.push(children.slice(i, i + itemsToShow));
    }
    return childrenArray;
  }, [children]);

  const {
    carouselFragment,
    slideToItem,
    useListenToCustomEvent,
    slideToNextItem,
    getCurrentActiveItem,
  } = useSpringCarousel({
    withLoop: true,

    items: childrenGroups?.map((group, index) => ({
      id: index,
      renderItem: (
        <div 
        onMouseOver={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex justify-center items-center w-full gap-5">
          {group}
        </div>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName !== "onSlideChange") return; 
    setActiveIndex(event.currentItem.index);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if(isPaused) return
      slideToNextItem();
      const currentItemIndex = getCurrentActiveItem().index;
      setActiveIndex(currentItemIndex);
    }, 3000);

    return () => {
      if(timer){
        clearTimeout(timer);
      }
      
    };
  });

  return (
    <div>
      <div className="overflow-hidden">{carouselFragment}</div>
      <div className="flex gap-3 justify-center items-center h-3 lg:h-4 lg:gap-4 mt-3">
        {childrenGroups.map((_, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              slideToItem(index);
            }}
            key={index}
            className={`rounded-full transition-all cursor-pointer ${
              activeIndex === index
                ? "h-3 w-3 lg:h-4 lg:w-4 bg-black"
                : "h-2 w-2 lg:h-3 lg:w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
