import { LinkStyle } from "../components/styles/appStyles"
import { maxGuessCount } from "./constants"

const gitHubLink = "https://github.com/bathtaters/mtg-settle"

const reportEmail = "bathtaters@gmail.com"

export default function InfoText() {
  return (<>
    <p className="text-scale-lg">
      Try to guess the <i>Magic: the Gathering</i> set based off of the art from {maxGuessCount} cards in a single expansion set.
    </p>

    <div className="text-scale-md my-4 sm:my-6 text-secondary/70">
      <p>All rights belong to the respective artists</p>

      <p>
        Inspired by the <LinkStyle href="https://www.youtube.com/channel/UCx7-zijZRQsYuGYHai8FXOg">Lords of Luxury</LinkStyle>&nbsp;
        <span className="text-scale-sm">
          (as well as&nbsp;<i>
            <LinkStyle href="https://nytimes.com/games/wordle/">Wordle</LinkStyle>,&nbsp;
            <LinkStyle href="https://heardle.app">Heardle</LinkStyle>,&nbsp;
            <LinkStyle href="https://framed.wtf">Framed</LinkStyle>,&nbsp;
          </i>etc.)
        </span>
      </p>
    </div>

    <p className="text-scale-xs font-sans">
      <LinkStyle href="https://mtgjson.com">MTGJSON DB</LinkStyle>&nbsp;-&nbsp; 
      <LinkStyle href="https://scryfall.com">Scryfall Art</LinkStyle>&nbsp;-&nbsp;
      <LinkStyle href={gitHubLink}>GitHub</LinkStyle>&nbsp;-&nbsp;
      <LinkStyle href={`mailto:${reportEmail}`}>Email</LinkStyle>
    </p>
  </>)
}