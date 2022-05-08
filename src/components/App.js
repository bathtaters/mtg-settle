import { AppWraperStyle, AppTitleStyle } from "./styles/appStyles"
import ArtContainer from "./ArtContainer"
import InputContainer from "./InputContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"


function App() {
  const { setName, guesses, correctGuess, text, handlers } = useAppController()  

  return (
    <AppWraperStyle>
      <AppTitleStyle>MtG Set-le</AppTitleStyle>

      <ArtContainer currentGuess={correctGuess === -1 && guesses.length} setName={setName} />
      
      <InputContainer text={text} correctGuess={correctGuess} handlers={handlers} />
      
      <GuessContainer guesses={guesses} correctGuess={correctGuess} />
    </AppWraperStyle>
  )
}

export default App