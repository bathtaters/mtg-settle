import { forwardRef, useLayoutEffect } from "react"
import { useLayoutListener } from "../services/suggestText.utils"
import { listClassDef, layoutClasses } from "../services/suggestText.custom"


export function WrapperStyle({ className, children }) {
  return (<span className={`${layoutClasses.containerWrapper} ${className}`}>{children}</span>)
}

export function EntryStyle({ classes, isSelected, children }) {
  return (
  <li className={`${classes?.base ?? listClassDef.base} ${
    isSelected ? classes?.select ?? listClassDef.select : classes?.unselect ?? listClassDef.unselect
  }`}>
    {children}
  </li>
  )
}


const Ab = () => <span className="hidden" /> // Absorb first/last child styling for input-group

export const ListStyle = forwardRef(function ListStyle({ textbox, children, className = listClassDef.wrapper }, ref) {

  // List position
  useLayoutEffect(() => {
    ref.current.style.marginTop = `${
      (textbox.current?.offsetHeight ?? 0)
      + layoutClasses.listVerticalOffset
      // - window.document.firstElementChild.scrollTop // doesn't work on mobile
    }px`
  }, [textbox.current?.offsetHeight])

  // List width
  useLayoutListener('resize', () => {
    ref.current.style.width = !textbox.current ? 'inherit' :
      `${textbox.current.offsetWidth - (layoutClasses.listSideInset * 2)}px`

    ref.current.style.marginLeft = `${layoutClasses.listSideInset}px`
  }, [textbox.current?.offsetWidth])

  // List height
  useLayoutListener('resize', () => {
    ref.current.style.maxHeight = `${
      window.document.firstElementChild.scrollHeight
      - (ref.current?.offsetTop ?? 0)
      - layoutClasses.listBottomMargin
    }px`
  }, [ref.current?.offsetTop])  
  
  return (
    <div className={layoutClasses.listWrapperOuter}><Ab /> 
      <div className={`${layoutClasses.listWrapperInner} ${className}`} ref={ref}>
        <ul><Ab />{children}<Ab /></ul>
      </div>
    <Ab /></div>
  )
})
