import { shareDefaults, shareChars } from "../../assets/constants"
import { blankArray }  from "../app.controller"

// Force clipboard API on MacOS Safari to avoid their frustratingly stupid sharing extension
const forceClipboard = () => /^((?!chrome|android|ip(hone|pod)|mobile).)*safari/i.test(navigator.userAgent)

async function shareData(text, title = shareDefaults.title, url = shareDefaults.url) {
  text = text + '\n' + url
  if (window.navigator.share && !forceClipboard()) {
    await window.navigator.share({ title, text }).catch(() => {})
    return false
  } else if (Boolean(window.navigator.clipboard?.writeText)) {
    await window.navigator.clipboard.writeText(text)
    return shareDefaults.copyMsg
  } else {
    return shareDefaults.failMsg
  }
}

const shareScore = (guesses, guessCount, date, setAlert) => shareData(
  `${shareDefaults.text(date)}\n${blankArray.map((_,idx) =>
      guessCount === idx ? shareChars.right :
      !guesses[idx] ? shareChars.empty :
      !guesses[idx].text ? shareChars.skip :
      guesses[idx].partial ? shareChars.partial :
      shareChars.wrong
  ).join('')}\n`
).then((feedback) => feedback && setAlert && setAlert(feedback))

export default shareScore