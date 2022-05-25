import { useMemo } from "react"
import {
  StatsWrapperStyle, InfoWrapperStyle, InfoItemStyle, StatsButtonWrapper,
  StatsDivider, ShareButton, NewGameButton,
  ProgressWrapperStyle, TooltipStyle, ProgressStyle
} from "../styles/StatsStyles"
import ModalBase from "./Modal/ModalBase"
import { blankArray } from "../../services/app.controller"
import { modalIds } from "../../assets/constants"
import useStatsController from "../../services/subservices/stats.controller"


function StatsBar({ label, value, maxValue, totalValue }) {
  const labelTip = `${label === 'M' ? 'Missed' : 'Solved in '+label}`
  const statsTip = useMemo(() => `${value} (${Math.round(100 * value / (totalValue || 1))}%)`, [value, totalValue])
  return (<>
    <TooltipStyle tip={labelTip}>{label}</TooltipStyle>
    <TooltipStyle tip={statsTip}><ProgressStyle value={value} max={maxValue} aria-label={statsTip} /></TooltipStyle>
  </>)
}


export default function StatsModal({ correctGuess, setCode, setAlert, newGame, openModal, setModal }) {
  const [
    { guesses, maxValue, totalGames, totalWins, percentWins }, share
  ] = useStatsController(correctGuess, setCode, setAlert, setModal)  

  return (
    <ModalBase title="Stats" modalId={modalIds.stats} openModal={openModal} setModal={setModal}
      renderBody={() => (
        <StatsWrapperStyle>
          <InfoWrapperStyle>
            <InfoItemStyle title="Total Played" value={totalGames} detail="games" />
            <InfoItemStyle title="Total Solved" value={totalWins} detail={percentWins+'%'} />
          </InfoWrapperStyle>

          <ProgressWrapperStyle>
            <StatsBar label="M" value={guesses[-2] ?? 0} maxValue={maxValue} totalValue={totalGames} />
            { blankArray.map((_,idx) =>
              <StatsBar
                key={idx} label={idx+1}
                value={guesses[idx] ?? 0}
                totalValue={totalGames} maxValue={maxValue}
              />
            ) }
          </ProgressWrapperStyle>
          
          {correctGuess !== -1 && <>
            <StatsDivider />
            <StatsButtonWrapper>
              <ShareButton onClick={share} />
              <NewGameButton onClick={newGame} />
            </StatsButtonWrapper>
          </>}
        </StatsWrapperStyle>
      )}
    />
  )
}