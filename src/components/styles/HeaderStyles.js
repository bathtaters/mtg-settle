
export const HeaderWrapperStyle = ({ children }) => (
  <div className="p-2 sm:p-4 bg-base-200 w-full">
    <nav className="navbar justify-center w-full max-w-4xl m-auto">{children}</nav>
  </div>
)

export const TitleStyle = ({ label, children }) => (
  <header className="navbar-center">
    <h1 className="hidden">{label}</h1>
    {children}
  </header>
)

export const HeaderPartStyle = ({ isLeft, children }) => <div className={isLeft ? "navbar-start" : "navbar-end"}>{children}</div>

export const ModalOpenButton = ({ modalId, onClick, tip, children }) => {
  return (
    <div className="tooltip tooltip-bottom tooltip-secondary font-sans text-xl" data-tip={tip} role="tooltip">
      <label
        htmlFor={onClick ? null : modalId} onClick={onClick} role="button"
        className="modal-button btn btn-circle btn-secondary btn-sm sm:btn-md mx-1 p-1 sm:p-1
        outline-2 outline-offset-2 outline-secondary z-30"
      >
        <span className="hidden" id={modalId+'-label'}>{tip}</span>
        {children}
      </label>
    </div>
  )
}
