import { InfoIcon, WarningIcon } from "../components/subcomponents/Icons"

// Credentials should be JSON of the form { gqlKey: 'Bearer <KEY>' } replacing <KEY> with your API key
import credentials from "./credentials.json"
if (!credentials?.apiKey || !credentials?.apiUrl) throw new Error(
  "Error, missing API key and/or URL. Add to ./src/assets/credentials.json: { apiKey: 'Bearer <API-KEY>', apiUrl: 'https://...' }"
)


// App options
export const maxGuessCount = 6
export const order = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8'] // Should go up to at least 'maxGuessCount'
export const helperText = "Enter the set here"
export const gitHubLink = "https://github.com/bathtaters/mtg-settle"

// Format text
export const formatGameDate = (date) => date && new Date(date+'T00:00:00').toLocaleDateString()

// Share options
export const shareDefaults = {
  title: "MtG Settle share",
  url: "https://settle.gg",
  text: (setCode) => `MtG Settle [${setCode || 'score'}]:`,
  copyMsg: { message: "Copied link to clipboard", className: "alert-info", Icon: InfoIcon },
}
export const shareChars = { wrong: "🟥", right: "🟩", empty: "⬛" }

// Modal options
export const modalIds = { about: "about-modal", stats: "stats-modal" }
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

// API Endpoints
export const apiEndpoint = {
  setList: 'setlist',
  solution: 'today',
}
