
export const ModalStyle = ({ modalId, hideClose = false, children }) => (<>
  <input type="checkbox" id={modalId} className="modal-toggle" />

  <label for={modalId} className="modal cursor-pointer modal-bottom sm:modal-middle">
    <label className="modal-box bg-secondary-content text-secondary" for="">
      { hideClose || <ModalCloseButton modalId={modalId} /> }
      {children}
    </label>
  </label>
</>)

export const ModalOpenButton = ({ modalId, children }) => (
  <label for={modalId} className="btn btn-circle btn-secondary btn-sm sm:btn-md modal-button sm:p-1">
    {children}
  </label>
)

export const ModalCloseButton = ({ modalId }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label for={modalId} className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content">✕</label>
  </span>
)
