
export const ArtWrapperStyle = ({ children }) => <div className="flex flex-wrap justify-center items-center py-4">{children}</div>

export const ArtStyle = ({ children }) => (
  <div className="relative inline-block w-56 h-40 m-2 mb-6">
    <div className="w-full h-full border border-primary bg-primary-content rounded-lg overflow-hidden">
      {children}
    </div>
  </div>
)

export const ArtCaptionStyle = ({ children, hidden }) => !hidden && (
  <div className="absolute -bottom-4 text-xs text-ellipsis font-thin w-full text-center line-clamp-1">
    {children}
  </div>
)