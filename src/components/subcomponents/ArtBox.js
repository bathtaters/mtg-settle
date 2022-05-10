import { ArtStyle, ArtCaptionStyle, ImageStyle } from "../styles/artStyles"
import LoadingSpinner from "./LoadingSpinner"


export default function ArtBox({ src, id, info, hidden }) {
  if (hidden) return false

  if (!src) return (<ArtStyle id={id}><LoadingSpinner /></ArtStyle>)

  return (
    <ArtStyle id={id}>
      <ImageStyle src={src} alt="Card Art" />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}