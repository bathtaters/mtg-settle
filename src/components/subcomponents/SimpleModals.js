import InfoText from "../../assets/InfoText"
import ModalBase from "./ModalBase"
import {
  ModalTitleStyle, ButtonContainerStyle, 
  AboutBodyStyle, NewGameBodyStyle, ModalButton
} from "../styles/ModalStyles"
import { useForceHide } from "../../services/subservices/modal.controller"
import { modalIds, newGameConfirm } from "../../assets/constants"

export function AboutModal() {
  return (
    <ModalBase modalId={modalIds.about}>
      <ModalTitleStyle id={modalIds.about}>About</ModalTitleStyle>
      <AboutBodyStyle id={modalIds.about}><InfoText /></AboutBodyStyle>
    </ModalBase>
  )
}

export function NewGameModal({ newGame, correctGuess }) {
  const { force, hide } = useForceHide(correctGuess === -1)
  
  return (
    <ModalBase modalId={modalIds.newGame} force={force} hideClose={true} role="alertdialog">
      <ModalTitleStyle id={modalIds.newGame}>New Game</ModalTitleStyle>
      <NewGameBodyStyle id={modalIds.newGame}>
        {newGameConfirm.msg}
        <ButtonContainerStyle>
          <ModalButton onClick={() => { hide(); newGame() }} aria-label={newGameConfirm.yes}>{newGameConfirm.yes}</ModalButton>
          <ModalButton onClick={() => hide()} aria-label={newGameConfirm.no}>{newGameConfirm.no}</ModalButton>
        </ButtonContainerStyle>
      </NewGameBodyStyle>
    </ModalBase>
  )
}