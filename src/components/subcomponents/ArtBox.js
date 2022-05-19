import { ArtStyle, ArtCaptionStyle, ImageStyle } from "../styles/ArtStyles"
import LoadingSpinner from "./LoadingSpinner"


export default function ArtBox({ src, idx, info, hidden }) {
  if (hidden) return false

  if (!src) return (<ArtStyle><LoadingSpinner /></ArtStyle>)

  return (
    <ArtStyle>
      <ImageStyle src={src} alt={`Card Art #${idx}`} />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}