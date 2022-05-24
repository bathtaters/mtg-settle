
export const HeaderWrapperStyle = ({ children }) => (
  <div className="p-2 sm:p-4 bg-base-200 w-full">
    <div className="navbar justify-center w-full max-w-4xl m-auto">{children}</div>
  </div>
)

export const TitleStyle = ({ children }) => <div className="navbar-center">{children}</div>

export const HeaderPartStyle = ({ isLeft, children }) => <div className={isLeft ? "navbar-start" : "navbar-end"}>{children}</div>

export const ModalOpenButton = ({ modalId, onClick, tip, children }) => {
  const ButtonTag = modalId ? "label" : "div"
  return (
    <div className="tooltip tooltip-bottom tooltip-secondary font-sans text-xl" data-tip={tip}>
      <ButtonTag
        htmlFor={modalId} onClick={onClick}
        className="modal-button btn btn-circle btn-secondary btn-sm sm:btn-md mx-1 p-1 sm:p-1
        outline-2 outline-offset-2 outline-secondary z-30"
      >
        {children}
      </ButtonTag>
    </div>
  )
}
