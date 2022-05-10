import ArtBox from "./subcomponents/ArtBox"
import { ArtWrapperStyle, CarouselStyle, CarouselSpacer, ButtonContainerStyle, ButtonStyle } from "./styles/artStyles"
import { blankArray } from "../services/app.controller"
import useRandomImages from "../services/images.controller"


export default function ArtContainer({ currentGuess, correctGuess, setCode }) {
  const { msg, artImages, cards } = useRandomImages(setCode, blankArray.length)

  if (msg) return <ArtWrapperStyle>{msg}</ArtWrapperStyle>

  return (
    <ArtWrapperStyle>
      
      <CarouselStyle>
        <CarouselSpacer />
        {blankArray.map((_, idx) =>(
          <ArtBox
            key={idx+'p'} id={'pic'+(idx+1)} 
            src={artImages[idx]}
            info={correctGuess !== -1 && cards[idx]}
            hidden={correctGuess === -1 && currentGuess < idx}
          />
        ))}
        <CarouselSpacer />
      </CarouselStyle>

      <ButtonContainerStyle>
        {blankArray.map((_, idx) => (
          <ButtonStyle key={idx+'k'} href={'#pic'+(idx+1)} disabled={correctGuess === -1 && idx > currentGuess}>
            {idx + 1}
          </ButtonStyle> 
        ))}
      </ButtonContainerStyle>
    </ArtWrapperStyle>
  )
}