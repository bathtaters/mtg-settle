import { ArtWrapperStyle, CarouselStyle, CarouselSpacer, ArtStyle, ArtCaptionStyle, ImageStyle, ButtonContainerStyle, ButtonStyle } from "./styles/artStyles"
import LoadingSpinner from "./subcomponents/LoadingSpinner"
import { blankArray } from "../services/app.controller"
import useRandomImages from "../services/images.controller"


function ArtBox({ src, id, info, hidden }) {
  if (hidden) return false

  if (!src) return (<ArtStyle id={id}><LoadingSpinner /></ArtStyle>)

  return (
    <ArtStyle id={id}>
      <ImageStyle src={src} alt="Card Art" />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}


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