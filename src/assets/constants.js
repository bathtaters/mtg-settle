import credentials from "./credentials.json"
import { gql } from "@apollo/client"

// DEBUG BLOCK
// import debugData from "./debugData.json"
const _DEBUG = {
  //* ENABLE */ enable: true, cardData: debugData,
  /* DISABLE */ enable: false, cardData: [],
  setData:  { code: "JUD", name: "Judgment" },
  imgSrc: 'https://picsum.photos/571/460'
}
export const getDebug = () => _DEBUG
// END DEBUG


// App options
export const maxGuessCount = 6
export const order = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8'] // Should go up to at least 'maxGuessCount'

// Image options
export const imageURL = (uuid) => `https://api.scryfall.com/cards/${uuid}?format=image&version=art_crop`
export const setInfoURL = (setCode) => `https://api.scryfall.com/sets/${setCode}`
export const setSymbolKey = 'icon_svg_uri'

// Modal options
export const aboutModalId = "about-modal"

// Guess list options
export const guessColumns = 2
export const guessOptions = [
  { mark: null, color: "" },
  { mark: "✓",  color: "badge-success" },
  { mark: "✕",  color: "badge-error" },
]
export const skippedMessage = 'Skipped'

// Alert options
export const alertHideDelay = 5000
export const illegalGuessMsg = (guess) => `"${guess}" isn't a remaining set.`

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