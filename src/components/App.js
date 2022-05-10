import { AppWraperStyle, AppTitleStyle, AppNavbarStyle } from "./styles/appStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"


function App() {
  const { setList, setInfo, guesses, correctGuess, handleGuess } = useAppController()  

  return (
    <AppWraperStyle>
      <AppNavbarStyle>
        <AppTitleStyle>MtG Set-le</AppTitleStyle>
      </AppNavbarStyle>

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} setCode={setInfo.code} />
      
      <EntryContainer list={setList} setInfo={setInfo} correctGuess={correctGuess} handleGuess={handleGuess} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />
    </AppWraperStyle>
  )
}

export default App