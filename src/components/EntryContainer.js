import SuggestText from "./subcomponents/SuggestText/SuggestText"
import { AnswerWrapperStyle, SetSymbolStyle, SetTextStyle, FormStyle, ButtonStyle, suggestClasses } from "./styles/EntryStyles"
import useEntryController from "../services/entry.controller"

function AnswerContainer({ setInfo }) {
  return (
    <AnswerWrapperStyle>
      { setInfo.symbol && <SetSymbolStyle label={setInfo.name} svg={setInfo.symbol} /> }
      <SetTextStyle>{setInfo.name} [{setInfo.code}]</SetTextStyle>
    </AnswerWrapperStyle>
  )
}

function InputContainer({ handleGuess, list }) {
  const { props, handleSubmit, hasText, disabled } = useEntryController(handleGuess)
  
  return (
    <FormStyle onSubmit={handleSubmit}>
      <SuggestText className={suggestClasses.textbox} listClasses={suggestClasses} list={list} label="guess-set" {...props}>
        <ButtonStyle value={hasText ? "Guess" : "Skip"} disabled={disabled} />
      </SuggestText>
    </FormStyle>
  )
}

export default function EntryContainer(props) {
  return props.correctGuess === -1 ? <InputContainer {...props} /> : <AnswerContainer {...props} />
}