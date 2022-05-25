import { AppWrapperStyle } from "./styles/AppStyles"
import ArtContainer from "./ArtContainer"
import GuessContainer from "./GuessContainer"
import useAppController from "../services/app.controller"
import EntryContainer from "./EntryContainer"
import HeaderContainer from "./HeaderContainer"
import Alert from "./subcomponents/Alert"
import { AboutModal, NewGameModal } from "./subcomponents/SimpleModals"
import StatsModal from "./subcomponents/StatsModal"

function App() {
  const {
    entryProps, setInfo, artData,
    guesses, correctGuess,
    ignoreHotkeys, newGame,
    openModal, setModal,
    alertObj, setAlert,
  } = useAppController()  

  

  return (
    <AppWrapperStyle>
      <HeaderContainer setModal={setModal} newGame={newGame} correctGuess={correctGuess} />

      <ArtContainer currentGuess={guesses.length} correctGuess={correctGuess} data={artData} ignoreHotkeys={ignoreHotkeys} />
      
      <EntryContainer correctGuess={correctGuess} {...entryProps} />

      <GuessContainer guesses={guesses} correctGuess={correctGuess} />

      {/* Alerts/Modals */}
        <Alert {...alertObj} setAlert={setAlert} />
        <AboutModal openModal={openModal} setModal={setModal} />
        <NewGameModal newGame={newGame} correctGuess={correctGuess} openModal={openModal} setModal={setModal} />
        <StatsModal
          newGame={newGame} correctGuess={correctGuess}
          setCode={setInfo.code} setAlert={setAlert}
          openModal={openModal} setModal={setModal}
        />

    </AppWrapperStyle>
  )
}

export default App