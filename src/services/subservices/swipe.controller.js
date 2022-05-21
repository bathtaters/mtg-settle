import { useCallback, useRef } from "react"

export const directions = ['left', 'up', 'right', 'down']

// Get coords from Touch or Drag event
const getX = (ev) => ev?.changedTouches ? ev.changedTouches[0].pageX : ev.pageX
const getY = (ev) => ev?.changedTouches ? ev.changedTouches[0].pageY : ev.pageY

// Create dummy drag image
const invisImg = new Image(0,0)
invisImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'


// Setup default preventer
const usePreventRef = (ref) => {
  const preventer = useCallback((ev) => ev.preventDefault(), [])
  
  const setRef = useCallback((el) => {
    // Cleanup
    if (ref.current) {
      ref.current.removeEventListener('touchmove', preventer)
    }
    // Prevent Defaults
    ref.current = el
    if (el) {
      el.addEventListener('touchmove', preventer, { passive: false })
    }
  }, [preventer, ref])
  
  return setRef
}


// Capture Swipe Events
export default function useSwipeController(
  callback, {  // onSwipe: callback(direction{directions array index}, distance{px}, duration{ms}, eventObj)
    enableMouse = true, // emulate swipe behavior w/ mouse click & drag
    animate = true,     // move target while swiping (can be 'x' or 'y' to only animate along one axis)
    animateFactor = 0.5,// multiplier to convert swipe distance to animation offset
    maxOffset = 75,     // offset limit for animation (will freeze here if exceeded)
    minDistance = 75,   // min swipe distance to call callback
    maxTime = 750,      // max swipe duration to call callback
  } = {}
) {
  // Setup references
  const element = useRef(null)
  const start = useRef([0,0,0])
  

  // Begin movement (touchstart/dragstart)
  const onTouchStart = useCallback((ev) => {
    element.current.style.transform = 'translate(0px,0px)' // Reset position
    // Store start position/time
    start.current = [getX(ev), getY(ev), new Date().getTime()]
    // Hide drag image 
    if (enableMouse && ev.dataTransfer) ev.dataTransfer.setDragImage(invisImg, 0, 0)
  }, [enableMouse])


  
  // End movement (touchend/dragend)
  const onTouchEnd = useCallback((ev) => {
    element.current.style.transform = 'translate(0px,0px)' // Reset position

    // Check time difference
    const duration = (new Date().getTime()) - start.current[2]
    if (maxTime >= 0 && duration > maxTime) return

    // Get movement vectors
    const vectors = [
      getX(ev) - start.current[0],
      getY(ev) - start.current[1],
    ]
    if (vectors.some((v) => isNaN(v))) return console.warn('Swipe distance is NaN!')

    // Check largest vector
    const distance = vectors.map(Math.abs)
    const isY = +(distance[0] < distance[1])
    if (distance[isY] < minDistance) return

    // Get direction & run callback(direction (0->3 = left->down CW), distance, duration)
    const directionIdx = isY + (2 * (vectors[isY] >= 0))
    if (typeof callback === 'function') callback(directionIdx, distance[isY], duration, ev)

    // console.debug(`TouchSwipe: ${directions[directionIdx]}, ${distance[isY]} px, ${duration} ms`)
  }, [callback, minDistance, maxTime])


  // Update animation (touchmove/drag)
  const onTouchMove = useCallback((ev) => {
    // Check that move is still legal
    const cancel = !animate || (maxTime >= 0 && (new Date().getTime()) - start.current[2] > maxTime)

    // Set X/Y positions to animate move
    element.current.style.transform = `translate(${
      cancel || animate === 'y' ? 0 :
        Math.max(Math.min(animateFactor * getX(ev) - start.current[0], maxOffset), -maxOffset)
    }px, ${
      cancel || animate === 'x' ? 0 :
        Math.max(Math.min(animateFactor * getY(ev) - start.current[1], maxOffset), -maxOffset)
    }px)`
  }, [animate, animateFactor, maxTime, maxOffset])



  // Handle interupted touch
  const onTouchCancel = useCallback(() => { element.current.style.transform = 'translate(0px,0px)' }, [])

  // Prevent defaults on (and get reference to) target
  const ref = usePreventRef(element, enableMouse)

  return !enableMouse ? {
      // Touch events only
      onTouchStart, onTouchEnd, onTouchMove, onTouchCancel, ref,
    } : {
      onTouchStart, onTouchEnd, onTouchMove, onTouchCancel, ref,
      // Include mouse events
      onDragStart: onTouchStart, onDragEnd: onTouchEnd, onDrag: onTouchMove,
      draggable: true, // enable dragging
    }
}