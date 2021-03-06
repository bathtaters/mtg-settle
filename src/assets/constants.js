import { gql } from "@apollo/client"
import { InfoIcon, WarningIcon } from "../components/subcomponents/Icons"

// Credentials should be JSON of the form { gqlKey: 'Bearer <KEY>' } replacing <KEY> with your API key
import credentials from "./credentials.json"
if (!credentials?.gqlKey) throw new Error(
  "Error, missing MTGJSON GraphQL key. Add gqlKey to ./src/assets/credentials.json: { gqlKey: 'Bearer <API-KEY>' }"
)


// App options
export const maxGuessCount = 6
export const order = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8'] // Should go up to at least 'maxGuessCount'
export const helperText = "Enter the set here"
export const gitHubLink = "https://github.com/bathtaters/mtg-settle"

// Image options
export const imageURL = (uuid) => `https://api.scryfall.com/cards/${uuid}?format=image&version=art_crop`
export const setInfoURL = (setCode) => `https://api.scryfall.com/sets/${setCode}`
export const setSymbolKey = 'icon_svg_uri'

// Share options
export const shareDefaults = {
  title: "MtG Settle share",
  url: "https://settle.gg",
  text: (setCode) => `MtG Settle [${setCode || 'score'}]:`,
  copyMsg: { message: "Copied link to clipboard", className: "alert-info", Icon: InfoIcon },
}
export const shareChars = { wrong: "🟥", right: "🟩", empty: "⬛" }

// Modal options
export const modalIds = { about: "about-modal", stats: "stats-modal", newGame: "new-game" }
export const modalFadeDelay = [50, 100] // [OPEN ms, CLOSE ms]
export const autoShowStatsDelay = 3000

// Guess list options
export const guessColumns = 2
export const guessOptions = [
  { mark: null, color: "" },
  { mark: "✓",  color: "badge-success" },
  { mark: "✕",  color: "badge-error" },
]
export const skippedMessage = 'Skipped'

// Alert options
export const alertFadeDuration = "duration-500"
export const alertHideDelay = 5000
export const newGameConfirm = {
  msg: 'Give up the current game?',
  yes: 'New Game', no: 'Back',
}
export const illegalGuessMsg = (guess) => ({
  message: `"${guess}" isn't a remaining set.`,
  className: "alert-warning",
  Icon: WarningIcon
})

// Error Boundary options
export const showStackTrace = process.env.NODE_ENV !== 'production'
export const errorFooter = "Try refreshing"

// Movement options
export const swipeOptions = {
  enableMouse: false, animate: 'x', animateFactor: 0.5, maxOffset: 10, minDistance: 50, maxTime: 750
}


// Card database parameters
export const ignoreCards = {
  equals: { // Card[Key] === Value
    isTextless: true,
    isPromo: true,
    isOversized: true,
    isOnlineOnly: true,
    isFullArt: true,
    isAlternative: true,
    isFoil: true,
  },

  matches: { // Value.test(Card[Key])
    // type: /Basic Land/,
    // number: /[^\d]/,
  }
}

export const databaseParams = {
  uri: 'https://graphql.mtgjson.com/',
  headers: { authorization: credentials.gqlKey },

  query: gql`
    query Cards($setCode: String!) {
      sets(
        input: { code: $setCode },
        page: { take: 1, skip: 0 },
        order: { order: ASC }
      )
      {
        cards {
          name artist identifiers{scryfallId}
          type number isReprint
          isTextless isPromo isOversized
          isOnlineOnly isFullArt
          isAlternative isFoil
        }
      }
    }
  `,
}