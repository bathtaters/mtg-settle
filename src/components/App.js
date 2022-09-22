import { AppWrapperStyle } from "./styles/AppStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"
import HeaderContainer from "./HeaderContainer"
import Alert from "./subcomponents/Alert"
import { AboutModal } from "./subcomponents/SimpleModals"
import StatsModal from "./subcomponents/StatsModal"

function App() {
  const {
    entryProps, solution,
    guesses, correctGuess,
    nextGame, ignoreHotkeys,
    openModal, setModal,
    alertObj, setAlert,
  } = useAppController()  

  return (
    <AppWrapperStyle>
      <HeaderContainer setModal={setModal} correctGuess={correctGuess} gameDate={solution.date} />

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} cards={solution.cards} ignoreHotkeys={ignoreHotkeys} />
      
      <EntryContainer correctGuess={correctGuess} {...entryProps} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />

      {/* Alerts/Modals */}
        <Alert {...alertObj} setAlert={setAlert} />
        <AboutModal openModal={openModal} setModal={setModal} />
        <StatsModal
          correctGuess={correctGuess} nextGame={nextGame}
          setCode={solution.setInfo.code} setAlert={setAlert}
          openModal={openModal} setModal={setModal}
        />

    </AppWrapperStyle>
  )
}

export default App