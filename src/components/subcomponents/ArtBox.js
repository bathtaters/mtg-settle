import { ArtStyle, ArtCaptionStyle, ImageStyle } from "../styles/artStyles"
import { WarningIcon } from "./Icons"


export default function ArtBox({ src, idx, info, hidden, divRef }) {
  if (hidden) return false

  if (!src) return (<ArtStyle divRef={divRef}><WarningIcon className="stroke-current w-full h-auto" /></ArtStyle>)

  return (
    <ArtStyle divRef={divRef}>
      <ImageStyle src={src} alt={`Card Art #${idx}`} />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}