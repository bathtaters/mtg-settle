
export const ArtWrapperStyle = ({ children }) => <div className="w-full h-1/2 my-2 text-center flex flex-col justify-center">{children}</div>

export const CarouselStyle = ({ children }) => <div className="carousel carousel-center mb-2">{children}</div>

export const CarouselSpacer = () => <div className="carousel-item w-1/4" />

export const ArtStyle = ({ id, children }) => (
  <div id={id} className="carousel-item relative items-end h-full mx-auto px-2">
      {children}
  </div>
)

export const ImageStyle = (props) => <img {...props} className="h-full w-auto max-h-[70vw] border border-primary rounded-lg overflow-hidden" />

export const ArtCaptionStyle = ({ children, hidden }) => !hidden && (
  <div className="absolute top-0 bottom-0 left-2 right-2 rounded-lg overflow-hidden flex justify-start items-end">
    <div className="inline-block px-1.5 py-1 text-sm sm:text-base font-light text-primary-content bg-primary/80 rounded-t">
      <span className="line-clamp-2 leading-tight break-words text-ellipsis">{children}</span>
    </div>
  </div>
)

export const ButtonStyle = (props) => <a {...props} className="btn btn-sm sm:btn-md sm:text-lg" /> 

export const ButtonContainerStyle = ({ children }) => <div className="flex justify-center w-full py-2 gap-2">{children}</div>
