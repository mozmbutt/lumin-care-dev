import { useSwipe } from 'hooks/useSwipe'
import React, { useEffect, useState } from 'react'

export const CarouselItem: React.FC<any> = ({ children }) => (
  <div className='w-full align-middle inline-block'>{children}</div>
)
const Carousel: React.FC<any> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

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
        {React.Children.map(children, (child) => React.cloneElement(child))}
      </div>
    </div>
  )
}

export default Carousel
