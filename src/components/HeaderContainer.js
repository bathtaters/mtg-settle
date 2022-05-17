import InfoText from "../assets/InfoText"
import { InfoIcon, NewGameIcon, StatsIcon } from "./subcomponents/Icons"
import { ModalStyle, ModalOpenButton } from "./subcomponents/ModalStyles"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalTitleStyle, ModalBodyStyle } from "./styles/HeaderStyles"
import { modalIds } from "../assets/constants"
import StatsContainer from "./subcomponents/StatsContainer"


export default function HeaderContainer({ newGame, correctGuess, setCode, setAlert }) {

  return (<>
    <ModalStyle modalId={modalIds.about}>
      <ModalTitleStyle>About</ModalTitleStyle>
      <ModalBodyStyle><InfoText /></ModalBodyStyle>
    </ModalStyle>

    <ModalStyle modalId={modalIds.stats} force={correctGuess !== -1}>
      <ModalTitleStyle>Stats</ModalTitleStyle>
      <ModalBodyStyle>
        <StatsContainer correctGuess={correctGuess} setCode={setCode} setAlert={setAlert} newGame={newGame} />
      </ModalBodyStyle>
    </ModalStyle>

    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton modalId={modalIds.about} tip="About"><InfoIcon /></ModalOpenButton>
        <ModalOpenButton modalId={modalIds.stats} tip="Stats"><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle>Settle</TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <ModalOpenButton onClick={newGame} tip="New Game"><NewGameIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>
  </>)
}