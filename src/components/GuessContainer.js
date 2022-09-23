import { GuessWrapperStyle, GuessStyle, SkippedGuessStyle } from "./styles/GuessStyles"
import { guessOptions, skippedMessage } from "../assets/constants"
import { blankArray } from "../services/app.controller"


function GuessEntry({ guess, isCorrect, idx }) {
  const optionIdx = !guess ? 0 : isCorrect ? 1 : guess.partial ? 3 : 2

  if (!guess) return <GuessStyle {...guessOptions[optionIdx]} idx={idx} />

  return (
    <GuessStyle {...guessOptions[optionIdx]} idx={idx}>
      {guess.text ? guess.text : <SkippedGuessStyle>{skippedMessage}</SkippedGuessStyle>}
    </GuessStyle>
  )
}


export default function GuessContainer({ guesses, correctGuess }) {
  return (
    <GuessWrapperStyle>
      { blankArray.map((_,idx) => (
        <GuessEntry guess={guesses[idx]} isCorrect={correctGuess === idx} idx={idx} key={idx} />
      )) }
    </GuessWrapperStyle>
  )
}
