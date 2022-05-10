import credentials from "./credentials.json"
import { gql } from "@apollo/client"

// DEBUG BLOCK
// import debugData from "./debugData.json"
const _DEBUG = {
  //* ENABLE */ enable: true, cardData: debugData,
  /* DISABLE */ enable: false, cardData: [],
  setData:  { code: "JUD", name: "Judgment" },
}
export const getDebug = () => _DEBUG
// END DEBUG


// Set the number of images available to guess
export const maxGuessCount = 6

// Load guess classes (Should go up to 'maxGuessCount')
export const order = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8']

// Image options
export const imageURL = (uuid) => `https://api.scryfall.com/cards/${uuid}?format=image&version=art_crop`

// Guess list options
export const guessColumns = 2
export const guessOptions = [
  { mark: null, color: "" },
  { mark: "✓",  color: "badge-success" },
  { mark: "✕",  color: "badge-error" },
]
export const skippedMessage = 'Skipped'

// Alert messages
export const illegalGuessMsg = (guess) => `"${guess}" isn't a remaining set.`

// Images Controller options
export const ignoreCards = {
  equals: {
    isTextless: true,
    isPromo: true,
    isOversized: true,
    isOnlineOnly: true,
    isFullArt: true,
    isAlternative: true,
    isFoil: true,
  },

  matches: {
    type: /$Basic Land/,
    // number: /[^\d]/,
  }
}

// Card database parameters (GraphQL)
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