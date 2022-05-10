import { AppWrapperStyle } from "./styles/appStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"
import HeaderContainer from "./HeaderContainer"
import Alert from "./subcomponents/Alert"

function App() {
  const { setList, setInfo, guesses, correctGuess, handleGuess, alertMsg, clearMsg } = useAppController()  

  return (
    <AppWrapperStyle>
      <HeaderContainer />

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} setCode={setInfo.code} />
      
      <EntryContainer list={setList} setInfo={setInfo} correctGuess={correctGuess} handleGuess={handleGuess} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />

      <Alert message={alertMsg} clearMessage={clearMsg} />
    </AppWrapperStyle>
  )
}

export default App