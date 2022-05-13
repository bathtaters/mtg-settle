import InfoText from "../assets/InfoText"
import { InfoIcon, ReloadIcon, StatsIcon } from "./subcomponents/Icons"
import { ModalStyle, ModalOpenButton } from "./subcomponents/ModalStyles"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalTitleStyle, ModalBodyStyle } from "./styles/headerStyles"
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
        <ModalOpenButton modalId={modalIds.about}><InfoIcon /></ModalOpenButton>
        <ModalOpenButton modalId={modalIds.stats}><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle>Settle</TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <ModalOpenButton onClick={newGame}><ReloadIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>
  </>)
}