
export const HeaderWrapperStyle = ({ children }) => (
  <div className="p-0 sm:p-1 mb-1 sm:mb-2 bg-base-200 w-full">
    <nav className="navbar justify-center w-full max-w-4xl m-auto">{children}</nav>
  </div>
)

export const TitleStyle = ({ label, date, children }) => (
  <header className="navbar-center flex flex-col gap-1">
    <h1 className="hidden">{label}</h1>
    <div>{children}</div>
    <div className="text-lg sm:text-2xl">{date}</div>
  </header>
)

export const HeaderPartStyle = ({ isLeft, children }) => <div className={isLeft ? "navbar-start" : "navbar-end"}>{children}</div>

export const ModalOpenButton = ({ onClick, tip, children }) => {
  return (
    <div data-tip={tip} role="tooltip"
      className="tooltip tooltip-bottom tooltip-secondary font-sans text-xl
      before:content-[attr(data-tip)] before:delay-75 after:delay-75
      focus-within:before:opacity-100 focus-within:after:opacity-100"
    >
      <button
        type="button" onClick={onClick} aria-label={tip}
        className="modal-button btn btn-circle btn-secondary btn-sm sm:btn-md mx-1 p-1 sm:p-1 sm:w-12 z-30"
      >
        {/* <span className="hidden">{tip}</span> */}
        {children}
      </button>
    </div>
  )
}
