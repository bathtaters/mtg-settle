
export const ArtWrapperStyle = ({ children }) => (
  <div className="w-full max-w-3xl my-2 text-center flex flex-col justify-center">
    {children}
  </div>
)

export const ArtStyle = ({ children }) => <div className="h-full flex justify-center"><div className="relative">{children}</div></div>

export const ImageStyle = (props) => (
  // eslint-disable-next-line
  <img {...props} className="w-auto rounded-lg overflow-hidden" />
)

export const ArtCaptionStyle = ({ children, hidden }) => !hidden && (
  <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg overflow-hidden flex justify-start items-end">
    <div className="inline-block px-1.5 py-1 text-sm sm:text-base font-light text-primary-content bg-primary/80 rounded-t">
      <span className="line-clamp-4 leading-tight break-words text-ellipsis">{children}</span>
    </div>
  </div>
)

// Carousel styling props
export const carouselStyle = {
  dynamicHeight: true,
  showThumbs: false,
  showStatus: false,
}


// CAROUSEL BUTTONS

export const ArrowButton = ({ isPrev, ...props }) => (
  <input
    type="button" {...props}
    value={isPrev ? "<" : ">"}
    className="btn btn-sm btn-ghost 
      hover:bg-base-300/30 disabled:bg-transparent
      rounded-none text-2xl h-auto"
  />
)

export const IndicatorButton = ({ src, value, ...props }) => (
  <button
    type="button"
    className={
      "relative inline-block mx-1 sm:mx-2 btn btn-sm btn-primary sm:btn-md btn-square "+
      "md:mb-1 md:mx-3 md:h-24 md:w-24 disabled:bg-opacity-100 overflow-clip"+
      (props.selected ? ' scale-125' : '')
    }
    style={{ backgroundImage: props.disabled ? 'none' : `url(${src})`, backgroundSize: 'cover' }}
    {...props}
  >
    <span
      className={"absolute rounded font-sans text-primary-content sm:bg-opacity-70 "+
        "top-0 left-0 bottom-0 right-0 flex justify-center items-center text-xs "+
        "sm:top-auto sm:right-auto sm:-bottom-0.5 sm:left-0 sm:px-1 sm:py-0.5 sm:text-sm "+
        (props.disabled ? '' : 'bg-primary ')
      }
    >{value}</span>
  </button>
)
