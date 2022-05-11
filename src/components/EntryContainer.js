import SuggestText from "./subcomponents/SuggestText/SuggestText"
import { AnswerWrapperStyle, SetSymbolStyle, SetTextStyle, FormStyle, ButtonStyle, suggestClasses } from "./styles/entryStyles"
import useEntryController from "../services/entry.controller"

function AnswerContainer({ setInfo }) {
  return (
    <AnswerWrapperStyle>
      { setInfo.symbol && <SetSymbolStyle src={setInfo.symbol} alt={setInfo.name} /> }
      <SetTextStyle>{setInfo.name} [{setInfo.code}]</SetTextStyle>
    </AnswerWrapperStyle>
  )
}

function InputContainer({ handleGuess, list }) {
  const { props, handleClick, hasText } = useEntryController(handleGuess)
  
  return (
    <FormStyle>
      <SuggestText className={suggestClasses.textbox} listClasses={suggestClasses} list={list} {...props}>
        <ButtonStyle value={hasText ? "Guess" : "Skip"} onClick={handleClick} />
      </SuggestText>
    </FormStyle>
  )
}

export default function EntryContainer(props) {
  return props.correctGuess === -1 ? <InputContainer {...props} /> : <AnswerContainer {...props} />
}