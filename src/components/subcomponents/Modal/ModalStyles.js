import { forwardRef } from "react"

export const ModalContainerStyle = forwardRef(({ id, onClick, role, children }, ref) => (
  <div ref={ref}
    onClick={onClick}
    id={id+'-modal'} role={role}
    aria-labelledby={id+'-title'}
    aria-describedby={id+'-body'}
    className="modal-box bg-secondary-content text-secondary cursor-auto
    max-w-sm sm:max-w-xl max-h-[85vh] m-6 px-4 pt-3 pb-2 pr-6 sm:pt-4"
  >{children}</div>
))

export const ModalBgdStyle = ({ onClick, className, children, }) => (
  <div className={`modal ${className}`} onClick={onClick}>{children}</div>
)

export const ModalTitleStyle = ({ id, children }) => <h2 className="opacity-75 font-sans" id={id+'-title'}>{children}</h2>
export const ModalBodyStyle = ({ id, children }) => <div className="py-4" id={id+'-body'}>{children}</div>

export const ModalCloseButton = ({ onClick }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <button type="button"
      className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content"
      aria-label="Close dialog"
      onClick={onClick}
    >
      ✕
    </button>
  </span>
)
