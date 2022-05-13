
export const HeaderWrapperStyle = ({ children }) => (
  <div className="p-2 sm:p-4 bg-base-200 w-full">
    <div className="navbar justify-center w-full max-w-4xl m-auto">{children}</div>
  </div>
)

export const TitleStyle = ({ children }) => <h2 className="navbar-center">{children}</h2>

export const HeaderPartStyle = ({ isLeft, children }) => <div className={isLeft ? "navbar-start" : "navbar-end"}>{children}</div>

export const ModalTitleStyle = ({ children }) => <h3 className="opacity-75 font-sans">{children}</h3>

export const ModalBodyStyle = ({ children }) => <div className="py-4 text-center">{children}</div>
