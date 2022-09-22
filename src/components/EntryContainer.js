import SuggestText from "./subcomponents/SuggestText/SuggestText"
import { AnswerWrapperStyle, SetSymbolStyle, SetTextStyle, FormStyle, ButtonStyle, suggestClasses } from "./styles/EntryStyles"
import useEntryController from "../services/entry.controller"
import { FORCE_ERROR } from "../assets/errors"

function AnswerContainer({ setInfo }) {
  return (
    <AnswerWrapperStyle>
      { setInfo.art && <SetSymbolStyle label={setInfo.name} svg={setInfo.art} /> }
      <SetTextStyle>{setInfo.name} [{setInfo.code}]</SetTextStyle>
    </AnswerWrapperStyle>
  )
}

function InputContainer({ handleGuess, setList, handleSelect }) {
  const { props, handleSubmit, hasText, disabled } = useEntryController(handleGuess)
  
  return (
    <FormStyle onSubmit={handleSubmit}>
      <SuggestText
        className={suggestClasses.textbox} listClasses={suggestClasses}
        list={setList} label="guess-set" onFocus={handleSelect} {...props}
      >
        <ButtonStyle value={hasText ? "Guess" : "Skip"} disabled={disabled} />
      </SuggestText>
    </FormStyle>
  )
}

export default function EntryContainer(props) {
  if (props.correctGuess !== -1) return <AnswerContainer {...props} />
  if (FORCE_ERROR || !props.setInfo?.code) return <AnswerWrapperStyle />
  return <InputContainer {...props} />
}