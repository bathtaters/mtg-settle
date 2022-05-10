
export const AppWrapperStyle = ({ children }) => (
  <div className="h-full w-full max-w-3xl max-h-[75rem] min-w-[18rem] min-h-[35rem] p-2 sm:p-4 m-auto overflow-hidden">
    <div className="flex flex-col justify-between h-full">{children}</div>
  </div>
)

export const AppErrorStyle = ({ title, children }) => (
  <div className="text-center">
    <h3 className="font-sans">{title}</h3>
    <details className="mt-4 whitespace-pre-wrap">
      <summary className="text-lg">Click to view details</summary>
      <div className="m-2 mockup-code before:hidden font-mono p-4">{children}</div>
    </details>
  </div>
)

export const LinkStyle = ({ href, children }) => (
  <a href={href} target="_blank" className="link link-hover link-secondary">
    {children}
  </a>
)

export const AlertWrapperStyle = ({ onClick, children }) => (
  <div className={'fixed bottom-4 right-4'}>
    <div className="alert alert-warning opacity-75 shadow-black shadow-lg cursor-pointer" onMouseDown={onClick}>
      <div>{children}</div>
    </div>
  </div>
)