import { forwardRef } from "react"

export const ModalContainerStyle = forwardRef(({ modalId, ...props }, ref) => (
  <div {...props} ref={ref}
    id={modalId+'-modal'}
    aria-labelledby={modalId+'-title'}
    aria-describedby={modalId+'-body'}
    className="modal-box bg-secondary-content text-secondary
    max-w-sm sm:max-w-xl max-h-[85vh] m-6 px-4 pt-3 pb-2 pr-6 sm:pt-4"
  />
))

export const ModalBgdStyle = ({ className, ...props }) => <div className={`modal cursor-pointer ${className}`} {...props} />

export const ModalTitleStyle = ({ id, children }) => <h2 className="opacity-75 font-sans" id={id+'-title'}>{children}</h2>

export const ButtonContainerStyle = ({ children }) => <div className="modal-action text-center">{children}</div>

export const ModalButton = (props) => <button type="button" className="btn btn-secondary" {...props} />

export const AboutBodyStyle = ({ id, children }) => <div className="py-4 text-center" id={id+'-body'}>{children}</div>

export const NewGameBodyStyle = ({ id, children }) => <div className="py-4 sm:pl-4 text-scale-xl" id={id+'-body'}>{children}</div>

export const ModalCloseButton = (props) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label
      className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content"
      tabIndex="0" role="button" aria-label="Close dialog"
      {...props}
    >
      ✕
    </label>
  </span>
)

export const ModalController = ({ id, onChange, isOpen }) => (
  <input type="checkbox" checked={isOpen}
    id={id} onChange={onChange} 
    className="modal-toggle"

    role="button" aria-haspopup="dialog"
    aria-expanded={isOpen}
    aria-controls={id+'-modal'}
    aria-labelledby={id+'-label'}
  />
)