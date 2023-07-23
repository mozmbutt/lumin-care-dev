import { TouchEvent, useState } from 'react'

interface SwipeInput {
  onSwipedLeft: () => void
  onSwipedRight: () => void
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void
  onTouchMove: (e: TouchEvent) => void
  onTouchEnd: () => void
}

const INIT_POINT = {
  x: 0,
  y: 0,
}

export const useSwipe = (input: SwipeInput, minSwipeDistance = 50): SwipeOutput => {
  const [touchStart, setTouchStart] = useState(INIT_POINT)
  const [touchEnd, setTouchEnd] = useState(INIT_POINT)

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(INIT_POINT)
    setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })
  }

  const onTouchMove = (e: TouchEvent) =>
    setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })

  const onTouchEnd = () => {
    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance

    if (isRightSwipe && Math.abs(distanceX) > distanceY) input.onSwipedRight()

    if (isLeftSwipe && distanceX > distanceY) input.onSwipedLeft()
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
