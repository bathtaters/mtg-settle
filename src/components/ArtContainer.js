import ArtBox from "./subcomponents/ArtBox"
import { ArtWrapperStyle, CarouselStyle, CarouselSpacer, ArrowWrapperStyle, ArrowButtonStyle, ButtonContainerStyle, ButtonStyle } from "./styles/artStyles"
import { blankArray } from "../services/app.controller"
import useArtController, { useCarouselHandler } from "../services/art.controller"
import LoadingSpinner from "./subcomponents/LoadingSpinner"

function CarouselArrow({ isPrev, scrollTo, disabled }) {
  const handleClick = useCarouselHandler(isPrev, scrollTo)
  return <ArrowButtonStyle isLeft={isPrev} value={isPrev ? '<' : '>'} onClick={handleClick} disabled={disabled} />
}


export default function ArtContainer({ currentGuess, correctGuess, data }) {
  const { loading, error, images, cards, visibleIdx, setChildRef, scrollTo, maxVisible } = useArtController(data, currentGuess, correctGuess)
  
  if (error) return <ArtWrapperStyle>{error}</ArtWrapperStyle>
  if (loading) return <ArtWrapperStyle><LoadingSpinner /></ArtWrapperStyle>

  return (
    <ArtWrapperStyle>
      
      <ArrowWrapperStyle>
        <CarouselArrow isPrev={true} scrollTo={scrollTo} disabled={visibleIdx === 0} />
        <CarouselArrow isPrev={false} scrollTo={scrollTo} disabled={visibleIdx === maxVisible} />

        <CarouselStyle>
          <CarouselSpacer />
          {blankArray.map((_, idx) =>(
            <ArtBox
              key={idx+'p'} idx={idx+1} 
              src={images[idx]}
              info={correctGuess !== -1 && cards[idx]}
              hidden={maxVisible < idx}
              divRef={setChildRef(idx)}
            />
          ))}
          <CarouselSpacer />
        </CarouselStyle>
      </ArrowWrapperStyle>

      <ButtonContainerStyle>
        {blankArray.map((_, idx) => (
          <ButtonStyle
            key={idx+'b'}
            value={idx + 1}
            onClick={()=>scrollTo(idx)}
            selected={visibleIdx === idx}
            disabled={maxVisible < idx}
          />
        ))}
      </ButtonContainerStyle>
    </ArtWrapperStyle>
  )
}