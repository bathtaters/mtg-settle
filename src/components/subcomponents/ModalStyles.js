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

export const ModalOpenButton = ({ modalId, onClick, tip, children }) => (
  <div className="tooltip tooltip-bottom tooltip-secondary font-sans text-xl" data-tip={tip}>
    <label
      htmlFor={modalId} onClick={onClick}
      className="btn btn-circle btn-secondary btn-sm sm:btn-md mx-1 p-1 sm:p-1"
    >
      {children}
    </label>
  </div>
)

const ModalCloseButton = ({ modalId }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label htmlFor={modalId} className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content">✕</label>
  </span>
)
