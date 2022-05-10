import { LinkStyle } from "../components/styles/appStyles"

const gitHubLink = "https://github.com/" // Change to repository

export default function InfoText() {
  return (<>
    <p className="">
      Try to guess which <i>Magic: the Gathering</i> set the art is from
    </p>

    <p className="text-sm my-1">
      All rights belong to the respective artists
    </p>

    <p className="text-xs mt-3 text-secondary/75">
      Inspired by <LinkStyle href="https://nytimes.com/games/wordle/">Wordle</LinkStyle>,&nbsp;
      <LinkStyle href="https://heardle.app">Heardle</LinkStyle>,&nbsp;
      <LinkStyle href="https://framed.wtf">Framed</LinkStyle>&nbsp; 
      &amp; the Lords of Luxury
    </p>

    <p className="text-xs mt-0.5 text-secondary/75">
      Set/Card data via <LinkStyle href="https://mtgjson.com">MTGJSON</LinkStyle>, 
      Artwork via <LinkStyle href="https://scryfall.com">Scryfall</LinkStyle>,&nbsp;
      <LinkStyle href={gitHubLink}>GitHub</LinkStyle>
    </p>
  </>)
}