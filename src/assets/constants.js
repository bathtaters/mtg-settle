import credentials from "./credentials.json"
import { gql } from "@apollo/client"
import { InfoIcon, WarningIcon } from "../components/subcomponents/Icons"

// App options
export const maxGuessCount = 6
export const order = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8'] // Should go up to at least 'maxGuessCount'
export const helperText = "Enter the set here"

// Image options
export const imageURL = (uuid) => `https://api.scryfall.com/cards/${uuid}?format=image&version=art_crop`
export const setInfoURL = (setCode) => `https://api.scryfall.com/sets/${setCode}`
export const setSymbolKey = 'icon_svg_uri'

// Share options
export const shareDefaults = {
  title: "MtG Settle share",
  url: "https://mtg-drafter.com/settlethewreckage",
  text: (setCode) => `MtG Settle [${setCode || 'score'}]:`,
  copyMsg: { message: "Copied link to clipboard", className: "alert-info", Icon: InfoIcon },
}
export const shareChars = { wrong: "🟥", right: "🟩", empty: "⬛" }

// Modal options
export const modalIds = { about: "about-modal", stats: "stats-modal" }
export const modalDelay = { open: 3000, close: 5 }

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
export const illegalGuessMsg = (guess) => ({
  message: `"${guess}" isn't a remaining set.`,
  className: "alert-warning",
  Icon: WarningIcon
})

// Error Boundary options
export const showStackTrace = true
export const errorFooter = "Try refreshing"


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
  headers: { authorization: `Bearer ${credentials.gqlKey}` },

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