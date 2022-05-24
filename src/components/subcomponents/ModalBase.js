import FocusTrap from "focus-trap-react"
import { ModalBgdStyle, ModalContainerStyle, ModalCloseButton } from "../styles/ModalStyles"
import useControlModal from "../../services/subservices/modal.controller"


export default function ModalBase({ modalId, hideClose = false, force, children }) {
  const [ isOpen, toggleState ] = useControlModal(force)
  
  return (<>
    <ModalBgdStyle onMouseUp={toggleState} onTouchEnd={toggleState} className={isOpen ? 'modal-open' : 'hidden'}>

      <FocusTrap active={isOpen}>
        
        <ModalContainerStyle onMouseUp={(e) => e.stopPropagation()} onTouchEnd={(e) => e.stopPropagation()}>
          
          {!hideClose &&
            <ModalCloseButton
              onMouseUp={toggleState} onTouchEnd={toggleState}
              onKeyDown={(ev) => ev.key === "Enter" && toggleState()}
            />
          }

          {children}

        </ModalContainerStyle>
      </FocusTrap>
    </ModalBgdStyle>

    <input type="checkbox" id={modalId} className="modal-toggle" onChange={toggleState} />
  </>)
}
