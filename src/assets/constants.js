import credentials from "./credentials.json"
import { gql } from "@apollo/client"

// Set the number of images available to guess
export const maxGuessCount = 6

// Image options
export const imageURL = (uuid) => `https://api.scryfall.com/cards/${uuid}?format=image&version=art_crop`

// Guess list options
export const guessOptions = {
  marks: [null, "✓", "✕"],
  colors: ["", "step-success", "step-error"],
}
export const skippedMessage = 'Skipped'

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