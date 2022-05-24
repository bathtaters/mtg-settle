import InfoText from "../../assets/InfoText"
import {
  ModalStyle, ModalTitleStyle, ButtonContainerStyle, 
  AboutBodyStyle, NewGameBodyStyle, ModalButton
} from "../styles/ModalStyles"
import { modalIds, newGameConfirm } from "../../assets/constants"

export function AboutModal() {
  return (
    <ModalStyle modalId={modalIds.about}>
      <ModalTitleStyle>About</ModalTitleStyle>
      <AboutBodyStyle><InfoText /></AboutBodyStyle>
    </ModalStyle>
  )
}

export function NewGameModal({ newGame, correctGuess }) {
  return (
    <ModalStyle modalId={modalIds.newGame} force={correctGuess !== -1 && null} hideClose={true}>
      <ModalTitleStyle>New Game</ModalTitleStyle>
      <NewGameBodyStyle>
        {newGameConfirm.msg}
        <ButtonContainerStyle>
          <ModalButton htmlFor={modalIds.newGame} onClick={newGame}>{newGameConfirm.yes}</ModalButton>
          <ModalButton htmlFor={modalIds.newGame}>{newGameConfirm.no}</ModalButton>
        </ButtonContainerStyle>
      </NewGameBodyStyle>
    </ModalStyle>
  )
}