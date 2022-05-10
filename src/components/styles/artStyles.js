
export const ArtWrapperStyle = ({ children }) => <div className="w-full h-1/2 my-2 text-center flex flex-col justify-center">{children}</div>

export const CarouselStyle = ({ children }) => <div className="carousel carousel-center mb-2">{children}</div>

export const CarouselSpacer = () => <div className="carousel-item w-1/4" />

export const ArtStyle = ({ id, divRef, children }) => (
  <div ref={divRef} id={id} className="carousel-item relative items-end h-full mx-auto px-2">
      {children}
  </div>
)

export const ImageStyle = (props) => <img {...props} className="h-full w-auto max-h-[70vw] border border-primary rounded-lg overflow-hidden" />

export const ArrowWrapperStyle = ({ children }) => <div className="relative">{children}</div>

export const ArrowButtonStyle = ({ isLeft, ...props }) => (
  <input
    type="button"
    className={`btn btn-sm btn-ghost hover:bg-base-300/30 disabled:bg-transparent rounded-none text-2xl h-auto absolute ${isLeft ? '-left-2' : '-right-2'} bottom-2 top-0 z-10`}
    {...props}
  />
)

export const ArtCaptionStyle = ({ children, hidden }) => !hidden && (
  <div className="absolute top-0 bottom-0 left-2 right-2 rounded-lg overflow-hidden flex justify-start items-end">
    <div className="inline-block px-1.5 py-1 text-sm sm:text-base font-light text-primary-content bg-primary/80 rounded-t">
      <span className="line-clamp-2 leading-tight break-words text-ellipsis">{children}</span>
    </div>
  </div>
)

export const ButtonStyle = (props) => (
  <input
    type="button" {...props}
    className={`btn btn-sm btn-primary sm:btn-md sm:text-lg z-0${props.selected ? ' scale-125' : ''}`}
  /> 
)

export const ButtonContainerStyle = ({ children }) => <div className="flex justify-center w-full py-2 gap-2">{children}</div>
