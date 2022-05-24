import useControlModal from "../../services/subservices/modal.controller"

export function ModalStyle({ modalId, hideClose = false, force, children }) {
  const [ isOpen, toggleState ] = useControlModal(force)
  
  return (<>
    <input type="checkbox" id={modalId} className="modal-toggle" onChange={toggleState} />

    <label htmlFor={modalId} className={`modal cursor-pointer${isOpen ? ' modal-open' : ' hidden'}`}>
      <label
        className="modal-box bg-secondary-content text-secondary
        max-w-sm sm:max-w-xl max-h-[85vh] m-6 px-4 pt-3 pb-2 pr-6 sm:pt-4"
      >
        { hideClose || <ModalCloseButton modalId={modalId} /> }
        {children}
      </label>
    </label>
  </>)
}

export const ModalTitleStyle = ({ children }) => <h3 className="opacity-75 font-sans">{children}</h3>

export const ButtonContainerStyle = ({ children }) => <div className="modal-action text-center">{children}</div>

export const ModalButton = (props) => <label className="btn btn-secondary" {...props} />

export const AboutBodyStyle = ({ children }) => <div className="py-4 text-center">{children}</div>

export const NewGameBodyStyle = ({ children }) => <div className="py-4 sm:pl-4 text-scale-xl">{children}</div>

const ModalCloseButton = ({ modalId }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label htmlFor={modalId} className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content">✕</label>
  </span>
)
