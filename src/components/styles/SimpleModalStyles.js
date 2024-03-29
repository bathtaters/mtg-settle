export const AboutBodyStyle = ({ children }) => <div className="text-center">{children}</div>

export const ModalButtonContainerStyle = ({ children }) => <div className="modal-action text-center">{children}</div>

export const ModalButton = ({ onClick, label }) => ( //aria-label={label}
  <button type="button" className="btn btn-secondary" onClick={onClick}>{label}</button>
)