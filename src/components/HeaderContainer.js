import InfoText from "../assets/InfoText"
import { InfoIcon } from "./subcomponents/Icons"
import { ModalStyle, ModalOpenButton } from "./subcomponents/ModalStyles"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, InfoTitleStyle, InfoBodyStyle } from "./styles/headerStyles"
import { aboutModalId } from "../assets/constants"


export default function HeaderContainer() {

  return (<>
    <ModalStyle modalId={aboutModalId}>
      <InfoTitleStyle>About</InfoTitleStyle>
      <InfoBodyStyle><InfoText /></InfoBodyStyle>
    </ModalStyle>

    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton modalId={aboutModalId}><InfoIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle>Settle</TitleStyle>

      <HeaderPartStyle isLeft={false} />
    </HeaderWrapperStyle>
  </>)
}