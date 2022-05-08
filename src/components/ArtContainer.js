import { ArtWrapperStyle, ArtStyle, ArtCaptionStyle } from "./styles/artStyles"

import { blankArray } from "../services/app.controller"
import useRandomImages from "../services/images.controller"


function ArtBox({ src, info, hidden }) {
  if (hidden || !src) return <ArtStyle />

  return (
    <ArtStyle>
      <img src={src} alt="Card Art" className="w-full" />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}


export default function ArtContainer({ currentGuess, correctGuess, setCode }) {
  const { msg, artImages, cards } = useRandomImages(setCode, blankArray.length)

  if (msg) return <ArtWrapperStyle>{msg}</ArtWrapperStyle>

  const isHidden = (idx) => correctGuess === -1 && currentGuess < idx

  return (
    <ArtWrapperStyle>
      { blankArray.map((_, idx) => (
        <ArtBox key={idx+'p'} src={artImages[idx]} info={correctGuess !== -1 && cards[idx]} hidden={isHidden(idx)} />
      )) }
    </ArtWrapperStyle>
  )
}