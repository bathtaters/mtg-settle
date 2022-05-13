import { useEffect, useRef } from "react"
import { modalDelay } from "../../assets/constants"

export function ModalStyle({ modalId, hideClose = false, force, children }) {
  // Allow programmatic open/close
  const modalToggle = useRef(null)
  useEffect(() => {
    if (typeof force === 'boolean') setTimeout(() => { modalToggle.current.checked = force }, modalDelay)
  }, [force])

  return (<>
    <input type="checkbox" ref={modalToggle} id={modalId} className="modal-toggle" />

    <label htmlFor={modalId} className="modal cursor-pointer">
      <label className="modal-box bg-secondary-content text-secondary max-h-[85vh] px-4 pt-3 pb-2 pr-6 sm:pt-4" htmlFor="">
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
      className="btn btn-circle btn-secondary btn-sm sm:btn-md modal-button mx-1 p-1 sm:p-1"
    >
      {children}
    </label>
  </div>
)

export const ModalCloseButton = ({ modalId }) => (
  <span className="modal-action absolute top-0 right-0 mt-1 mr-1">
    <label htmlFor={modalId} className="btn btn-circle btn-sm btn-ghost hover:bg-secondary hover:text-secondary-content">✕</label>
  </span>
)
