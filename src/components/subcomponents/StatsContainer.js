import { useEffect, useMemo, useState } from "react"
import {
  StatsWrapperStyle, InfoWrapperStyle, InfoItemStyle, StatsButtonWrapper,
  StatsDivider, ShareButton, NewGameButton,
  ProgressWrapperStyle, TooltipStyle, ProgressStyle
} from "../styles/StatsStyles"
import { ModalStyle, ModalTitleStyle } from "./ModalStyles"
import { blankArray } from "../../services/app.controller"
import { getStats } from "../../services/subservices/storage.services"
import shareScore from "../../services/subservices/share.services"
import { modalIds } from "../../assets/constants"


function StatsBar({ label, value, maxValue, totalValue }) {
  const labelTip = `${label === 'M' ? 'Missed' : 'Solved in '+label}`
  const statsTip = useMemo(() => `${value} (${Math.round(100 * value / (totalValue || 1))}%)`, [value, totalValue])
  return (<>
    <TooltipStyle tip={labelTip}>{label}</TooltipStyle>
    <TooltipStyle tip={statsTip}><ProgressStyle value={value} max={maxValue} /></TooltipStyle>
  </>)
}


export default function StatsContainer({ correctGuess, setCode, setAlert, newGame }) {
  const [ stats, setStats ] = useState(getStats())
  useEffect(() => { setStats(getStats()) }, [setStats, correctGuess, setCode])

  const maxValue = typeof stats?.guesses === 'object' ? Math.max(0, ...Object.values(stats.guesses)) : 0
  const totalGames = typeof stats?.guesses === 'object' ? Object.values(stats.guesses).reduce((sum,n) => sum + n, 0) : 0
  const totalWins = totalGames - (stats?.guesses?.[-2] ?? 0)
  const percentWins = totalGames ? Math.round(100 * totalWins / totalGames) : 0

  return (
    <ModalStyle modalId={modalIds.stats} force={correctGuess !== -1}>
      <ModalTitleStyle>Stats</ModalTitleStyle>

      <StatsWrapperStyle>
        <InfoWrapperStyle>
          <InfoItemStyle title="Total Played" value={totalGames} detail="games" />
          <InfoItemStyle title="Total Solved" value={totalWins} detail={percentWins+'%'} />
        </InfoWrapperStyle>

        <ProgressWrapperStyle>
          <StatsBar label="M" value={stats?.guesses?.[-2] ?? 0} maxValue={maxValue} totalValue={totalGames} />
          { blankArray.map((_,idx) =>
            <StatsBar
              key={idx} label={idx+1}
              value={stats?.guesses?.[idx] ?? 0}
              totalValue={totalGames} maxValue={maxValue}
            />
          ) }
        </ProgressWrapperStyle>
        
        {correctGuess !== -1 && <>
          <StatsDivider />
          <StatsButtonWrapper>
            <ShareButton onClick={() => shareScore(correctGuess, setCode, setAlert)} />
            <NewGameButton onClick={newGame} />
          </StatsButtonWrapper>
        </>}
      </StatsWrapperStyle>
    </ModalStyle>
  )
}