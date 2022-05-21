import LoadingSpinner from "./LoadingSpinner"
import { EmptyArtStyle, ArtStyle, ArtCaptionStyle, ImageStyle } from "../styles/ArtStyles"
import useSwipeController from "../../services/subservices/swipe.controller"
import { swipeOptions } from "../../assets/constants"


export default function ArtBox({ src, idx, info, hidden, onSwipe }) {
  const swipeEvents = useSwipeController(onSwipe, swipeOptions)

  if (hidden) return false

  if (!src) return (<EmptyArtStyle swipeEvents={swipeEvents}><LoadingSpinner /></EmptyArtStyle>)

  return (
    <ArtStyle swipeEvents={swipeEvents}>
      <ImageStyle src={src} alt={`Card Art #${idx}`} />
      <ArtCaptionStyle hidden={!info}><i>{info.name}</i> by {info.artist}</ArtCaptionStyle>
    </ArtStyle>
  )
}