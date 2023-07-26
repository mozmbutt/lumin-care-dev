import { useSwipe } from "hooks/useSwipe";
import React, { useEffect, useMemo, useState } from "react";

export const CarouselItem: React.FC<any> = ({ children }) => (
  <div className="w-full align-middle">{children}</div>
);
const Carousel: React.FC<any> = ({ children, itemsToShow = 1 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const childrenGroups = useMemo(() => {
    const childrenArray: any = [];
    if (children?.length === 0) return childrenArray;
    for (let i = 0; i < children.length; i += itemsToShow) {
      childrenArray.push(children.slice(i, i + itemsToShow));
    }
    return childrenArray;
  }, [children]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(
          (activeIndex + 1) % (itemsToShow > 1 ? itemsToShow : children.length)
        );
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipe({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="whitespace-nowrap overflow-hidden">
        {childrenGroups.map((childrenGroup) => (
          <div
            className="w-full inline-block transition-all duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {childrenGroup.map((child: any) => child)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
