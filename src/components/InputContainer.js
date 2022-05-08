import AutoCompleteBox from "./AutoCompleteBox"
import { FormStyle, ButtonStyle } from "./styles/inputStyles"
import setList from "../assets/setList.json"


export default function InputContainer({ text, correctGuess, handlers }) {
  return (
    <FormStyle>
      <AutoCompleteBox value={text} list={setList} onChange={handlers.change} disabled={correctGuess !== -1} />
      <ButtonStyle value={text ? "Guess" : "Skip"} disabled={correctGuess !== -1} onClick={handlers.click} />
    </FormStyle>
  )
}