import LoadingSpinner from "./LoadingSpinner"
import { EmptyArtStyle, ArtStyle, ArtCaptionStyle, ImageStyle } from "../styles/ArtStyles"


export default function ArtBox({ src, idx, info, hidden }) {
  if (hidden) return false

  if (!src) return (<EmptyArtStyle><LoadingSpinner /></EmptyArtStyle>)

  return (
    <ArtStyle>
      <ImageStyle src={src} alt={`Card Art #${idx}`} />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}