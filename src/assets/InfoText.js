import { LinkStyle } from "../components/styles/appStyles"

const gitHubLink = "https://github.com/" // Change to repository

export default function InfoText() {
  return (<>
    <p className="text-scale-lg">
      Try to guess which <i>Magic: the Gathering</i> expansion the card art is from.
    </p>

    <div className="text-scale-md my-3 text-secondary/70">
      <p>All rights belong to the respective artists</p>

      <p>
        Inspired by the Lords of Luxury&nbsp;
        <span className="text-scale-sm">
          (as well as&nbsp;<i>
            <LinkStyle href="https://nytimes.com/games/wordle/">Wordle</LinkStyle>,&nbsp;
            <LinkStyle href="https://heardle.app">Heardle</LinkStyle>,&nbsp;
            <LinkStyle href="https://framed.wtf">Framed</LinkStyle>,&nbsp;
          </i>etc.)
        </span>
      </p>
    </div>

    <p className="text-scale-xs mt-2 font-sans">
      <LinkStyle href="https://mtgjson.com">MTGJSON DB</LinkStyle>&nbsp;-&nbsp; 
      <LinkStyle href="https://scryfall.com">Scryfall Art</LinkStyle>&nbsp;-&nbsp;
      <LinkStyle href={gitHubLink}>GitHub repo</LinkStyle>
    </p>
  </>)
}