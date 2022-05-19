import { AppWrapperStyle } from "./styles/AppStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"
import HeaderContainer from "./HeaderContainer"
import Alert from "./subcomponents/Alert"

function App() {
  const {
    setList, setInfo, artData,
    guesses, correctGuess,
    handleGuess, newGame,
    alertObj, setAlert
  } = useAppController()  

  return (
    <AppWrapperStyle>
      <HeaderContainer newGame={newGame} correctGuess={correctGuess} setCode={setInfo.code} setAlert={setAlert} />

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} data={artData} />
      
      <EntryContainer list={setList} setInfo={setInfo} correctGuess={correctGuess} handleGuess={handleGuess} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />

      <Alert {...alertObj} setAlert={setAlert} />
    </AppWrapperStyle>
  )
}

export default App