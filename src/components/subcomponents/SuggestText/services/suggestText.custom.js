// ---- Customization ---- \\

// Hide 'static' entries, Hide list when text-box is empty
export const hideStaticWhenEmpty = true, hideListWhenEmpty = true

// adapt list entry for display
export const displayEntry = (entry) => entry.name

// adapt input text for comparison
export const adaptInput = (inputVal) => inputVal.toUpperCase()

// adapt list entry for comparison
export const adaptEntry = (entry) => entry.name?.toUpperCase() // Get 'entry' name

// run comparison
export const testEntry = (inputAdapt, entryAdapt, entryOrig) => (
  // entryAdapt.slice(0,len) === inputAdapt // Quicker
  entryAdapt.indexOf(inputAdapt) !== -1 // More flexible
  || entryOrig.code.indexOf(inputAdapt) !== -1 // ** Compare to set-code
)

// What to do on <Enter> options: (pick(), submit(), currentPick, isSolo, inputVal)
export const enterBehavior = (pick, submit, picked) => picked ? submit() : pick()

// unique ID for each entry
export const getId  = (entry) => entry?.code || '#' + (entry.name || 'NONE')

// Customized styling
export const listClassDef = {
  wrapper: "shadow-black shadow-md",
  base: "w-full py-0.5 px-2 text-base line-clamp-2 break-words text-ellipsis cursor-default",
  select: "bg-base-300 text-base-content",
  unselect: "bg-base-100 text-base-content",
  textbox: "w-full h-full input input-bordered",
}

// Layout-based styling
export const layoutClasses = {
  containerWrapper: "relative w-full",
  listWrapperOuter: "absolute z-auto top-auto",
  listWrapperInner: "fixed overflow-y-auto overflow-x-hidden",
  listSideInset: 4, // for rounded edge (px)
  listVerticalOffset: 2, // space away from input box (px)
  listBottomMargin: 8, // space away from bottom of page (px)
}