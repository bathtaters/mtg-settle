import { LinkStyle } from "../components/styles/AppStyles"
import { maxGuessCount, gitHubLink } from "./constants"

export default function InfoText() {
  return (<>
    <p className="text-scale-lg">
      Try to guess which <i>Magic: the Gathering</i> set all {maxGuessCount} cards are from.
    </p>

    <div className="text-scale-md my-4 sm:my-6 text-secondary/70">
      <p>All rights belong to the artists &amp; Wizards of the Coast.</p>

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

    <footer className="text-scale-xs font-sans">
      <LinkStyle href="https://mtgjson.com">MTGJSON DB</LinkStyle>&nbsp;-&nbsp; 
      <LinkStyle href="https://scryfall.com">Scryfall Art</LinkStyle>&nbsp;-&nbsp;
      <LinkStyle href={gitHubLink}>GitHub</LinkStyle>
    </footer>
  </>)
}