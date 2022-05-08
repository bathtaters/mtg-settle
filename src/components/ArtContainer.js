import { ArtWrapperStyle, ArtStyle } from "./styles/artStyles"
import { imageBaseURL } from "../assets/constants"
import { blankArray } from "../services/app.controller"
import useRandomImages from "../services/images.controller"


function ArtBox({ identifier }) {
  if (!identifier) return <ArtStyle />

  return (
    <ArtStyle>
      <img src={imageBaseURL+identifier} className="w-full" />
    </ArtStyle>
  )
}


export default function ArtContainer({ currentGuess, setName }) {
  const artImages = useRandomImages(setName, blankArray.length)

  return (
    <ArtWrapperStyle>
      { blankArray.map((_, idx) => <ArtBox key={idx+'p'} identifier={(currentGuess === false || currentGuess >= idx) && artImages[idx]} />) }
    </ArtWrapperStyle>
  )
}