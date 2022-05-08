import { FormStyle, TextBoxStyle, ButtonStyle } from "./styles/inputStyles"

export default function InputContainer({ text, correctGuess, handlers }) {
  return (
    <FormStyle>
      <TextBoxStyle value={text} disabled={correctGuess !== -1} onChange={handlers.change} onKeyPress={handlers.keys} />
      <ButtonStyle value={text ? "Guess" : "Skip"} disabled={correctGuess !== -1} onClick={handlers.click} />
    </FormStyle>
  )
}