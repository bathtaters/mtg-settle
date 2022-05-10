import { useEffect, useCallback, useState, useLayoutEffect } from "react"

// Determine if list is valid
export const validList = (list) => Array.isArray(list) && Boolean(list.length);

// Hotkey Handlers
export const getNext = (curr, total) => curr + 1 >= total || curr < 0 ? 0 : curr + 1;
export const getPrev = (curr, total) => curr <= 0 || curr > total ? total - 1 : curr - 1;

// Get value of selection based off index
export const getSelected = (selected, suggestions) => {
  if (selected < 0) {
    if (suggestions.length === 1) return suggestions[0];
    return;
  }
  return selected < suggestions.length && suggestions[selected];
};

export const getNonStaticSolo = (list) => {
  const nonStatic = list.filter(entry => !entry.isStatic)
  return nonStatic.length === 1 && nonStatic[0]
}

export const getNonStaticSoloIdx = (list) => {
  let nonStatic = []
  list.forEach((entry,idx) => !entry.isStatic && nonStatic.push(idx))
  return nonStatic.length === 1 ? nonStatic[0] : -1
}



// Hook that works like 'useLayoutEffect', plus triggers effect on 'listenerType' event
export function useLayoutListener(listenerType, effect, deps) {
  useLayoutEffect(() => {
    window.addEventListener(listenerType, effect)
    effect()
    return () => { window.removeEventListener(listenerType, effect) }
  }, deps)
}



// Provides a ref to give to an object you want to be scrolled to if invisible
//    options = see IntersectionObserver options & ScrollIntoView options
export function useScrollToRef({
  // Observer options
  rootRef = null, threshold = 1.0, rootMargin = "0px",
  // ScrollIntoView options
  behavior = "auto", block = "start", inline = "nearest", 
} = {}) {
  // Create scroll callback
  const [ elementRef, setRef ] = useState(null)
  const scrollTo = (entries) => {
    if (elementRef && !entries[0].isIntersection)
      elementRef.scrollIntoView({ behavior, block, inline })
  }

  // Add/Remove observer listener
  useEffect(() => {
    const root = rootRef && 'current' in rootRef ? rootRef.current : rootRef

    const observer = new IntersectionObserver(scrollTo, {root, threshold, rootMargin})
    if (elementRef) observer.observe(elementRef)

    return () => { if (elementRef) observer.unobserve(elementRef) }
  }, [elementRef, rootRef, threshold, rootMargin])

  // Get reference to element
  return (newRef) => setRef(newRef)
}



// Listen & handle hotkeys
// hotkeyMap = { [keyCode]: () => action(), ... }
export function useHotkeys(hotkeyMap, { skip, deps } = {}) {
  const hotkeyHandler = useCallback((ev) => {
    // console.debug(' >> KeyCode: ',ev.keyCode); // print keycodes

    if (!hotkeyMap[ev.keyCode]) return;
    ev.preventDefault();

    if (typeof hotkeyMap[ev.keyCode] === 'function') hotkeyMap[ev.keyCode](ev);
    else console.error('Malformed keyMap for', ev.keyCode, hotkeyMap[ev.keyCode]);

  }, deps);

  useEffect(() => {
    if (!skip) document.addEventListener('keydown', hotkeyHandler, false);
    else document.removeEventListener('keydown', hotkeyHandler, false);

    return () => document.removeEventListener('keydown', hotkeyHandler, false);

  }, deps && deps.concat(skip));
}