
export const AppWraperStyle = ({ children }) => (
  <div className="h-full w-full max-w-3xl max-h-[75rem] min-w-[18rem] min-h-[35rem] p-2 sm:p-4 m-auto overflow-hidden">
    <div className="flex flex-col justify-between h-full">{children}</div>
  </div>
)

export const AppNavbarStyle = ({ children }) => (<>
  <div className="navbar justify-center">{children}</div>
</>)

export const AppTitleStyle = ({ children }) => <h1 className="navbar-center">{children}</h1>