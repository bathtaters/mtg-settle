import ArtBox from "./subcomponents/ArtBox"
import { ArtWrapperStyle, CarouselStyle, CarouselSpacer, ArrowWrapperStyle, ArrowButtonStyle, ButtonContainerStyle, ButtonStyle } from "./styles/artStyles"
import { blankArray } from "../services/app.controller"
import useRandomImages from "../services/images.controller"
import useScrollToIndex from "../services/scroll.controller"
import { useCallback, useEffect } from "react"

function CarouselArrow({ isPrev, scrollTo, disabled }) {
  const handleClick = useCallback(() => scrollTo((idx) => idx + (isPrev ? -1 : 1)), [isPrev])
  return <ArrowButtonStyle isLeft={isPrev} value={isPrev ? '<' : '>'} onClick={handleClick} disabled={disabled} />
}

export default function ArtContainer({ currentGuess, correctGuess, setCode }) {
  const { msg, artImages, cards } = useRandomImages(setCode, blankArray.length)

  const { visibleIdx, setChildRef, scrollTo } = useScrollToIndex({ scrollEndDeps: [currentGuess] })

  useEffect(() => { if (correctGuess >= 0) scrollTo(correctGuess) }, [correctGuess])

  if (msg) return <ArtWrapperStyle>{msg}</ArtWrapperStyle>

  const maxVisible = correctGuess === -1 ? currentGuess : blankArray.length - 1

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
              src={artImages[idx]}
              info={correctGuess !== -1 && cards[idx]}
              hidden={correctGuess === -1 && currentGuess < idx}
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
            disabled={correctGuess === -1 && idx > currentGuess}
          />
        ))}
      </ButtonContainerStyle>
    </ArtWrapperStyle>
  )
}