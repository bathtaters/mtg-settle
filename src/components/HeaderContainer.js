import HeaderLogo from "../assets/Logo"
import { InfoIcon, NewGameIcon, StatsIcon } from "./subcomponents/Icons"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalOpenButton } from "./styles/HeaderStyles"
import { modalIds } from "../assets/constants"
import StatsModal from "./subcomponents/StatsModal"
import { AboutModal, NewGameModal } from "./subcomponents/SimpleModals"


export default function HeaderContainer({ newGame, correctGuess, setCode, setAlert }) {
  const newGameProps = correctGuess === -1 ? {} : {onClick: newGame}

  return (<>
    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <AboutModal />
        <ModalOpenButton modalId={modalIds.about} tip="About"><InfoIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle label="Settle"><HeaderLogo /></TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <NewGameModal newGame={newGame} correctGuess={correctGuess} />
        <ModalOpenButton modalId={modalIds.newGame} tip="New Game" {...newGameProps}><NewGameIcon /></ModalOpenButton>
        
        <StatsModal newGame={newGame} correctGuess={correctGuess} setCode={setCode} setAlert={setAlert} />
        <ModalOpenButton modalId={modalIds.stats} tip="Stats"><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>

    
  </>)
}