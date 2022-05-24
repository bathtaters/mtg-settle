import { useCallback, useRef, useState } from "react"
import { useReducedMotion } from "./mediaQuery.controller"

export const directions = ['left', 'up', 'right', 'down']

// Get coords from Touch or Drag event
const getX = (ev) => ev?.changedTouches ? ev.changedTouches[0].pageX : ev.pageX
const getY = (ev) => ev?.changedTouches ? ev.changedTouches[0].pageY : ev.pageY

// Create dummy drag image
const invisImg = new Image(0,0)
invisImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'


// Max MS between two touch-events that will make them a single multi-touch event
const coincidentTouchThreshold = 500

// Logic to determine multi-touch event
const getMultitouch = (touchCount, currentTime, lastEventTime) => {
  if (!touchCount) return false // Is not a touch event
  if (touchCount > 1) return true // Is a simple multi-touch event
  if (!lastEventTime) return false // Is single-touch event & no prior event
  // Count two virtually coincident touches as a multi-touch
  return lastEventTime + coincidentTouchThreshold > currentTime
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
  const [isMultitouch, setMultitouch] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  

  // Begin movement (touchstart/dragstart)
  const onTouchStart = useCallback((ev) => {
    element.current.style.transform = 'translate(0px,0px)' // Reset position
    
    // Detect multi-touch AKA pinch event
    const timestamp = new Date().getTime()
    if (getMultitouch(ev?.changedTouches?.length, timestamp, start.current[2]))
      return setMultitouch(true)

    // Store start position/time
    start.current = [getX(ev), getY(ev), timestamp]
    
    // Hide drag image 
    if (enableMouse && ev.dataTransfer) ev.dataTransfer.setDragImage(invisImg, 0, 0)
  }, [enableMouse])


  
  // End movement (touchend/dragend)
  const onTouchEnd = useCallback((ev) => {
    element.current.style.transform = 'translate(0px,0px)' // Reset position
    if (isMultitouch) return setMultitouch(false) // Ignore multi-touch

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
  }, [callback, minDistance, maxTime, isMultitouch])


  // Update animation (touchmove/drag), NON-PASSIVE listener
  const onTouchMove = useCallback((ev) => {
    // Ignore multi-touch
    if (isMultitouch) return

    // Ignore if touch is too long (Check maxTime)
    if (maxTime >= 0 && (new Date().getTime()) - start.current[2] > maxTime) return

    // Ignore opposite axis when animating along single-axis
    const offset = [getX(ev) - start.current[0], getY(ev) - start.current[1]]
    if (animate === 'y' && Math.abs(offset[0]) > Math.abs(offset[1])) return
    if (animate === 'x' && Math.abs(offset[0]) < Math.abs(offset[1])) return
        
    // Disable swipe-to-scroll
    if (ev.cancelable) ev.preventDefault()

    // Ignore animation if requested
    if (prefersReducedMotion) return

    // Set X/Y positions to animate move
    element.current.style.transform = `translate(${
      !animate || animate === 'y' ? 0 :
        Math.max(Math.min(offset[0] * animateFactor, maxOffset), -maxOffset)
    }px, ${
      !animate || animate === 'x' ? 0 :
        Math.max(Math.min(offset[1] * animateFactor, maxOffset), -maxOffset)
    }px)`
  }, [animate, animateFactor, maxTime, maxOffset, isMultitouch, prefersReducedMotion])



  // Handle interupted touch
  const onTouchCancel = useCallback(() => { element.current.style.transform = 'translate(0px,0px)' }, [])


  // Add non-passive listeners to element whenever REF is set
  const ref = useCallback((el) => {
    // Cleanup listeners
    if (element.current) {
      element.current.removeEventListener('touchmove', onTouchMove)
      element.current.removeEventListener('drag', onTouchMove)
    }
    // Setup non-passive listeners
    element.current = el
    if (el) {
      el.addEventListener('touchmove', onTouchMove, { passive: false })
      if (enableMouse) {
        el.addEventListener('drag', onTouchMove, { passive: false })
      }
    }
  }, [onTouchMove, enableMouse])


  return !enableMouse ? {
      // Touch events only
      onTouchStart, onTouchEnd, onTouchCancel, ref,
    } : {
      onTouchStart, onTouchEnd, onTouchCancel, ref,
      // Include mouse events
      onDragStart: onTouchStart, onDragEnd: onTouchEnd,
      draggable: true, // enable dragging
    }
}