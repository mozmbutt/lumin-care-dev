import { useSwipe } from 'hooks/useSwipe'
import React, { useEffect, useMemo, useState } from 'react'

export const CarouselItem: React.FC<any> = ({ children }) => (
  <div className='w-full align-middle inline-block'>{children}</div>
)
const Carousel: React.FC<any> = ({ children, itemsToShow }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)


  // Group children into arrays based on the number of items to show
  // const childrenArray = useMemo(
  //   () => {
  //     const childrenArray: any = []
  //     if (children?.length === 0) return childrenArray
  //     for (let i = 0; i < children.length; i += itemsToShow) {
  //       childrenArray.push(children.slice(i, i + itemsToShow));
  //     }
  //     return childrenArray
  //   }
  //   , [children])

  // console.log({childrenArray})


  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }


  const lastRowItems = children.legth % itemsToShow



  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipe({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div
      className='overflow-hidden'
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div
        className='whitespace-nowrap transition-transform duration-700'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {
          children.map((child: any, index: number) => (<div
            className={'px-4 inline-block ' +
              ((itemsToShow > 1 || lastRowItems > 1) ? 'w-1/' + (index + 1 >= (children.length - lastRowItems) ? lastRowItems : itemsToShow) : 'w-full')}
          >
            {child}
          </div>))

        }
      </div>
    </div>
  )
}

export default Carousel
