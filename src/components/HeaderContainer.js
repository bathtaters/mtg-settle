import InfoText from "../assets/InfoText"
import InfoI from "./subcomponents/InfoI"
import { ModalStyle, ModalOpenButton } from "./subcomponents/ModalStyles"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, InfoTitleStyle, InfoBodyStyle } from "./styles/headerStyles"

const modalId = "info-modal"

export default function HeaderContainer() {

  return (<>
    <ModalStyle modalId={modalId}>
      <InfoTitleStyle>About</InfoTitleStyle>
      <InfoBodyStyle><InfoText /></InfoBodyStyle>
    </ModalStyle>

    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton modalId={modalId}><InfoI /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle>Settle</TitleStyle>

      <HeaderPartStyle isLeft={false} />
    </HeaderWrapperStyle>
  </>)
}