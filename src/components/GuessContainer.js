import { GuessWrapperStyle, GuessStyle, SkippedGuessStyle } from "./styles/guessStyles"
import { guessOptions, skippedMessage } from "../assets/constants"
import { blankArray } from "../services/app.controller"


function GuessEntry({ guess, isCorrect, idx }) {
  const optionIdx = guess == null ? 0 : isCorrect ? 1 : 2

  if (guess == null) return <GuessStyle {...guessOptions[optionIdx]} idx={idx} />

  return (
    <GuessStyle {...guessOptions[optionIdx]} idx={idx}>
      {guess ? guess : <SkippedGuessStyle>{skippedMessage}</SkippedGuessStyle>}
    </GuessStyle>
  )
}


export default function GuessContainer({ guesses, correctGuess }) {
  return (
    <GuessWrapperStyle>
      { blankArray.map((_,idx) => (
        <GuessEntry key={guesses[idx] || idx} idx={idx} isCorrect={correctGuess === idx} guess={guesses[idx]} />
      )) }
    </GuessWrapperStyle>
  )
}
