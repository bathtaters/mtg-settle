import FocusTrap from "focus-trap-react"
import { ModalBgdStyle, ModalContainerStyle, ModalCloseButton, ModalTitleStyle, ModalBodyStyle } from "./ModalStyles"
import useControlModal, { checkCanReturnFocus } from "./modal.controller"

export default function ModalBase({ modalId, title, openModal, setModal, hideX = false, role = "dialog", children }) {
  const { isRendered, isVisible, toggleState } = useControlModal(modalId, openModal, setModal)
  
  const focusOptions = {
    initialFocus: false,
    returnFocusOnDeactivate: false,
    escapeDeactivates: false,
    clickOutsideDeactivates: !hideX,
    checkCanReturnFocus,
  }
  
  return isRendered && isVisible && (
    <ModalBgdStyle onClick={toggleState} className={!isVisible ? '' : hideX ? 'modal-open' : 'modal-open cursor-pointer'}>

      <FocusTrap active={isVisible} focusTrapOptions={focusOptions}>
        
        <ModalContainerStyle id={modalId} onClick={(e) => e.stopPropagation()} role={role}>
          
          { !hideX && <ModalCloseButton onClick={toggleState} /> }

          <ModalTitleStyle id={modalId}>{title}</ModalTitleStyle>

          <ModalBodyStyle id={modalId}>{children}</ModalBodyStyle>

        </ModalContainerStyle>
      </FocusTrap>
    </ModalBgdStyle>
  )
}
