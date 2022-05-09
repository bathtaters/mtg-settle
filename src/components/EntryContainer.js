import AutoCompleteBox from "./AutoCompleteBox"
import { AnswerWrapperStyle, FormStyle, ButtonStyle } from "./styles/entryStyles"
import setList from "../assets/setList.json"


function AnswerContainer({ setInfo }) {
  return (
    <AnswerWrapperStyle>{setInfo.name} [{setInfo.code}]</AnswerWrapperStyle>
  )
}

function InputContainer({ text, handlers }) {
  return (
    <FormStyle>
      <AutoCompleteBox value={text} list={setList} onChange={handlers.change} />
      <ButtonStyle value={text ? "Guess" : "Skip"} onClick={handlers.click} />
    </FormStyle>
  )
}

export default function EntryContainer(props) {
  return props.correctGuess === -1 ? InputContainer(props) : AnswerContainer(props)
}