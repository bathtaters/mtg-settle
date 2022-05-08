import { useMemo } from "react"
import { GuessWrapperStyle, GuessStyle, SkippedGuessStyle } from "./styles/guessStyles"
import { guessOptions, skippedMessage } from "../assets/constants"
import { blankArray } from "../services/app.controller"


function GuessEntry({ guess, isCorrect }) {
  const optionIdx = useMemo(() => guess == null ? 0 : isCorrect ? 1 : 2, [guess, isCorrect])

  if (guess == null) return <GuessStyle mark={guessOptions.marks[optionIdx]} color={guessOptions.colors[optionIdx]} />

  return (
    <GuessStyle mark={guessOptions.marks[optionIdx]} color={guessOptions.colors[optionIdx]}>
      {guess ? guess : <SkippedGuessStyle>{skippedMessage}</SkippedGuessStyle>}
    </GuessStyle>
  )
}


export default function GuessContainer({ guesses, correctGuess }) {
  return (
    <GuessWrapperStyle>
      { blankArray.map((_,idx) => <GuessEntry key={guesses[idx] || idx} isCorrect={correctGuess === idx} guess={guesses[idx]} />) }
    </GuessWrapperStyle>
  )
}
