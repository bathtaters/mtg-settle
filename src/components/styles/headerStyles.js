
export const HeaderWrapperStyle = ({ children }) => (
  <div className="navbar justify-center">{children}</div>
)

export const TitleStyle = ({ children }) => <h2 className="navbar-center">{children}</h2>

export const HeaderPartStyle = ({ isLeft, children }) => <div className={isLeft ? "navbar-start" : "navbar-end"}>{children}</div>

export const InfoTitleStyle = ({ children }) => <h3 className="opacity-75 font-sans">{children}</h3>

export const InfoBodyStyle = ({ children }) => <div className="py-4 text-center">{children}</div>
