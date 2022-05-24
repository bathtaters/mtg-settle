import InfoText from "../../assets/InfoText"
import ModalBase from "./ModalBase"
import {
  ModalTitleStyle, ButtonContainerStyle, 
  AboutBodyStyle, NewGameBodyStyle, ModalButton
} from "../styles/ModalStyles"
import { modalIds, newGameConfirm } from "../../assets/constants"

export function AboutModal() {
  return (
    <ModalBase modalId={modalIds.about}>
      <ModalTitleStyle>About</ModalTitleStyle>
      <AboutBodyStyle><InfoText /></AboutBodyStyle>
    </ModalBase>
  )
}

export function NewGameModal({ newGame, correctGuess }) {
  return (
    <ModalBase modalId={modalIds.newGame} force={correctGuess !== -1 && null} hideClose={true}>
      <ModalTitleStyle>New Game</ModalTitleStyle>
      <NewGameBodyStyle>
        {newGameConfirm.msg}
        <ButtonContainerStyle>
          <ModalButton htmlFor={modalIds.newGame} onClick={newGame}>{newGameConfirm.yes}</ModalButton>
          <ModalButton htmlFor={modalIds.newGame}>{newGameConfirm.no}</ModalButton>
        </ButtonContainerStyle>
      </NewGameBodyStyle>
    </ModalBase>
  )
}