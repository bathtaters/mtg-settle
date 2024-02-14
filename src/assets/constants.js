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
  text: (date) => `MtG Settle ${date || new Date().toJSON().slice(5,10)}:`,
  copyMsg: { message: "Copied link to clipboard", className: "alert-info", Icon: InfoIcon },
  failMsg: { message: "Clipboard access disabled by browser", className: "alert-warning", Icon: WarningIcon },
}
export const shareChars = { wrong: "🟥", skip: "🟥", right: "🟩", partial: "🟨", empty: "⬛" }

// Modal options
export const modalIds = { about: "about-modal", stats: "stats-modal" }
export const modalFadeDelay = [50, 100] // [OPEN ms, CLOSE ms]
export const autoShowStatsDelay = 1500

// Guess list options
export const guessColumns = 2
export const guessOptions = [
  { mark: null, color: "badge-neutral" },
  { mark: "✓",  color: "badge-success" },
  { mark: "✕",  color: "badge-error" },
  { mark: "–",  color: "badge-warning" },
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
