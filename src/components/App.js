import { AppWraperStyle, AppTitleStyle } from "./styles/appStyles"
import ArtContainer from "./ArtContainer"
import AnswerContainer from "./AnswerContainer"
import InputContainer from "./InputContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"


function App() {
  const { setInfo, guesses, correctGuess, text, handlers } = useAppController()  

  return (
    <AppWraperStyle>
      <AppTitleStyle>MtG Set-le</AppTitleStyle>

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} setCode={setInfo.code} />
      
      <InputContainer text={text} correctGuess={correctGuess} handlers={handlers} />

      <AnswerContainer setInfo={setInfo} correctGuess={correctGuess} />
      
      <GuessContainer guesses={guesses} correctGuess={correctGuess} />
    </AppWraperStyle>
  )
}

export default App