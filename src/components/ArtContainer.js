import { Carousel } from 'react-responsive-carousel'
import ArtBox from "./subcomponents/ArtBox"
import LoadingSpinner from "./subcomponents/LoadingSpinner"
import { ArtWrapperStyle, ArrowButton, IndicatorButton, carouselStyle } from "./styles/ArtStyles"
import { blankArray } from "../services/app.controller"
import useArtController from "../services/art.controller"


export default function ArtContainer({ currentGuess, correctGuess, ignoreHotkeys, data }) {
  const {
    images, cards, loading, error,
    carouselProps, disableNext, maxVisible, onSwipe
  } = useArtController(data, currentGuess, correctGuess, ignoreHotkeys)
  
  if (error) return <ArtWrapperStyle>{error}</ArtWrapperStyle>
  if (loading) return <ArtWrapperStyle><LoadingSpinner /></ArtWrapperStyle>

  return (
    <ArtWrapperStyle selected={carouselProps.selectedItem}>
      
        <Carousel
          {...carouselProps}
          {...carouselStyle}

          renderArrowPrev={(onClick, hasPrev, label) => (
            <ArrowButton isPrev={true} onClick={onClick} disabled={!hasPrev} aria-label={label} />
          )}

          renderArrowNext={(onClick, hasNext, label) => (
            <ArrowButton isPrev={false} onClick={onClick} disabled={!hasNext || disableNext} aria-label={label} />
          )}
          
          renderIndicator={(onClick, selected, idx, label) => (
            <IndicatorButton
              aria-label={label+(idx+1)}
              value={idx + 1}
              onClick={onClick}
              selected={selected}
              disabled={idx > maxVisible}
              src={images[idx]}
            />
          )}
        >

          {blankArray.map((_, idx) => (
            <ArtBox
              key={idx+'p'} idx={idx+1} 
              src={images[idx]}
              info={correctGuess !== -1 && cards[idx]}
              hidden={maxVisible < idx}
              onSwipe={onSwipe}
            />
          ))}

        </Carousel>
    </ArtWrapperStyle>
  )
}