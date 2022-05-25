import FocusTrap from "focus-trap-react"
import { ModalBgdStyle, ModalContainerStyle, ModalCloseButton, ModalController } from "../styles/ModalStyles"
import useControlModal from "../../services/subservices/modal.controller"


export default function ModalBase({ modalId, hideClose = false, force, role = "dialog", children }) {
  const [ isOpen, toggleState ] = useControlModal(force)
  
  return (<>
    <ModalBgdStyle onMouseUp={toggleState} onTouchEnd={toggleState} className={isOpen ? 'modal-open' : 'hidden'}>

      <FocusTrap active={isOpen}>
        
        <ModalContainerStyle
          onMouseUp={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          role={role} modalId={modalId}
        >
          
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

    <ModalController id={modalId} onChange={toggleState} isOpen={isOpen} />
  </>)
}
