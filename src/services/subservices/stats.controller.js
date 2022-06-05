import { useEffect, useState } from "react"
import { getStats } from "./storage.services"
import shareScore from "./share.services"
import { modalIds, autoShowStatsDelay } from "../../assets/constants"

const MISSED = "-2"

function calculateStats() {
  const stats = getStats() || {}

  // Calculate display stats
  const maxValue = typeof stats?.guesses === 'object' ? Math.max(
    0, ...Object.entries(stats.guesses).map(([key,val]) => key === MISSED ? 0 : val)
  ) : 0
  const totalGames = typeof stats?.guesses === 'object' ? Object.values(stats.guesses).reduce((sum,n) => sum + n, 0) : 0
  const totalWins = totalGames - (stats?.guesses?.[MISSED] ?? 0)
  const percentWins = totalGames ? Math.round(100 * totalWins / totalGames) : 0
  return { guesses: stats.guesses || {}, maxValue, totalGames, totalWins, percentWins }
}

export default function useStatsController(correctGuess, setCode, setAlert, setModal) {
  // Auto-show Modal when game ends
  useEffect(() => {
    const autoShow = correctGuess !== -1 && setTimeout(() => { setModal(modalIds.stats) }, autoShowStatsDelay)
    return () => { autoShow && clearTimeout(autoShow) }
  }, [correctGuess, setModal])

  // Download stats from Browser memory
  const [ stats, setStats ] = useState(calculateStats())
  useEffect(() => { setStats(calculateStats()) }, [correctGuess, setCode])

  // Share score
  const share = () => shareScore(correctGuess, setCode, setAlert)

  return [ stats, share ]
}
