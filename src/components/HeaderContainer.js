import HeaderLogo from "../assets/Logo"
import { InfoIcon, NewGameIcon, StatsIcon } from "./subcomponents/Icons"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalOpenButton } from "./styles/HeaderStyles"
import { modalIds } from "../assets/constants"
import StatsModal from "./subcomponents/StatsContainer"
import { AboutModal, NewGameModal } from "./subcomponents/SimpleModals"


export default function HeaderContainer({ newGame, correctGuess, setCode, setAlert }) {
  const newGameProps = correctGuess === -1 ? {modalId: modalIds.newGame} : {onClick: newGame}

  return (<>
    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton modalId={modalIds.about} tip="About"><InfoIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle><HeaderLogo /></TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <ModalOpenButton tip="New Game" {...newGameProps}><NewGameIcon /></ModalOpenButton>
        <ModalOpenButton modalId={modalIds.stats} tip="Stats"><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>

    <AboutModal />
    <NewGameModal newGame={newGame} correctGuess={correctGuess} />
    <StatsModal newGame={newGame} correctGuess={correctGuess} setCode={setCode} setAlert={setAlert} />
  </>)
}