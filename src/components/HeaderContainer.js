import HeaderLogo from "../assets/Logo"
import { InfoIcon, NewGameIcon, StatsIcon } from "./subcomponents/Icons"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalOpenButton } from "./styles/HeaderStyles"
import { modalIds } from "../assets/constants"


export default function HeaderContainer({ newGame, correctGuess, setModal }) {
  const handleNewGame = () => correctGuess === -1 ? setModal(modalIds.newGame) : newGame()

  return (<>
    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton onClick={() => setModal(modalIds.about)} tip="About"><InfoIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle label="Settle"><HeaderLogo /></TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <ModalOpenButton onClick={handleNewGame} tip="New Game"><NewGameIcon /></ModalOpenButton>
        <ModalOpenButton onClick={() => setModal(modalIds.stats)} tip="Stats"><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>

    
  </>)
}