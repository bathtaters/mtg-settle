import { AppWraperStyle } from "./styles/appStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"
import HeaderContainer from "./HeaderContainer"


function App() {
  const { setList, setInfo, guesses, correctGuess, handleGuess } = useAppController()  

  return (
    <AppWraperStyle>
      <HeaderContainer />

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} setCode={setInfo.code} />
      
      <EntryContainer list={setList} setInfo={setInfo} correctGuess={correctGuess} handleGuess={handleGuess} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />
    </AppWraperStyle>
  )
}

export default App