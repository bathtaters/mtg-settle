import { useMemo } from "react"
import HeaderLogo from "../assets/Logo"
import { InfoIcon, StatsIcon } from "./subcomponents/Icons"
import { HeaderWrapperStyle, TitleStyle, HeaderPartStyle, ModalOpenButton } from "./styles/HeaderStyles"
import { modalIds, formatGameDate } from "../assets/constants"

export default function HeaderContainer({ gameDate, setModal }) {
  const date = useMemo(() => formatGameDate(gameDate), [gameDate])
  
  return (<>
    <HeaderWrapperStyle>
      <HeaderPartStyle isLeft={true}>
        <ModalOpenButton onClick={() => setModal(modalIds.about)} tip="About"><InfoIcon /></ModalOpenButton>
      </HeaderPartStyle>

      <TitleStyle label="Settle" date={date}><HeaderLogo /></TitleStyle>

      <HeaderPartStyle isLeft={false}>
        <ModalOpenButton onClick={() => setModal(modalIds.stats)} tip="Stats"><StatsIcon /></ModalOpenButton>
      </HeaderPartStyle>
    </HeaderWrapperStyle>
  </>)
}