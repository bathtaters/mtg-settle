import { AnswerWrapperStyle, AnswerTitleStyle, AnswerInfoStyle } from "./styles/answerStyles"


export default function AnswerContainer({ setInfo, correctGuess }) {
  return (
    <AnswerWrapperStyle hidden={correctGuess === -1}>
      <AnswerTitleStyle>Answer: </AnswerTitleStyle><AnswerInfoStyle>{setInfo.name} [{setInfo.code}]</AnswerInfoStyle>
    </AnswerWrapperStyle>
  )
}