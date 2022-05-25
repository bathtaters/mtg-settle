import InfoText from "../../assets/InfoText"
import ModalBase from "./Modal/ModalBase"
import { AboutBodyStyle, NewGameBodyStyle, ModalButtonContainerStyle, ModalButton } from "../styles/SimpleModalStyles"
import { modalIds, newGameConfirm } from "../../assets/constants"

export function AboutModal({ openModal, setModal }) {
  return (
    <ModalBase
      title="About" modalId={modalIds.about} openModal={openModal} setModal={setModal}
      renderBody={() => (<AboutBodyStyle><InfoText /></AboutBodyStyle>)}
    />
  )
}

export function NewGameModal({ newGame, openModal, setModal }) {
  return (
    <ModalBase
      title="New Game" modalId={modalIds.newGame} openModal={openModal} setModal={setModal} hideX={true} role="alertdialog"
      renderBody={() => (
        <NewGameBodyStyle>
          {newGameConfirm.msg}
          <ModalButtonContainerStyle>
            <ModalButton label={newGameConfirm.yes} onClick={() => newGame()} />
            <ModalButton label={newGameConfirm.no}  onClick={() => setModal(null)} />
          </ModalButtonContainerStyle>
        </NewGameBodyStyle>
      )} 
    />
  )
}