
export const ArtWrapperStyle = ({ children }) => <div className="flex flex-wrap justify-center items-center py-4">{children}</div>

export const ArtStyle = ({ children }) => (
  <span className="w-48 h-44 m-2 border border-primary bg-primary-content rounded-lg overflow-hidden">
    {children}
  </span>
)