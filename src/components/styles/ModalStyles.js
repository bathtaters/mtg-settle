import { forwardRef } from "react"

export const ModalContainerStyle = forwardRef((props, ref) => (
  <label {...props} ref={ref}
    className="modal-box bg-secondary-content text-secondary
    max-w-sm sm:max-w-xl max-h-[85vh] m-6 px-4 pt-3 pb-2 pr-6 sm:pt-4"
  />
))

export const ModalBgdStyle = ({ className, ...props }) => <div className={`modal cursor-pointer ${className}`} {...props} />

export const ModalTitleStyle = ({ children }) => <h3 className="opacity-75 font-sans">{children}</h3>

export const ButtonContainerStyle = ({ children }) => <div className="modal-action text-center">{children}</div>

export const ModalButton = (props) => <label className="btn btn-secondary" {...props} />

export const AboutBodyStyle = ({ children }) => <div className="py-4 text-center">{children}</div>

export const NewGameBodyStyle = ({ children }) => <div className="py-4 sm:pl-4 text-scale-xl">{children}</div>

export const ModalCloseButton = (props) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content" tabIndex="0" {...props}>
      ✕
    </label>
  </span>
)
