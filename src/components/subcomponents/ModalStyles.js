
export const ModalStyle = ({ modalId, hideClose = false, children }) => (<>
  <input type="checkbox" id={modalId} className="modal-toggle" />

  <label htmlFor={modalId} className="modal cursor-pointer">
    <label className="modal-box bg-secondary-content text-secondary px-4 pt-3 pb-2 pr-6 sm:pt-4" htmlFor="">
      { hideClose || <ModalCloseButton modalId={modalId} /> }
      {children}
    </label>
  </label>
</>)

export const ModalOpenButton = ({ modalId, children }) => (
  <label htmlFor={modalId} className="btn btn-circle btn-secondary btn-sm sm:btn-md modal-button sm:p-1">
    {children}
  </label>
)

export const ModalCloseButton = ({ modalId }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label htmlFor={modalId} className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content">✕</label>
  </span>
)
