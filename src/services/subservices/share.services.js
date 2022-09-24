import { shareDefaults, shareChars } from "../../assets/constants"
import { blankArray }  from "../app.controller"

async function shareData(text, title = shareDefaults.title, url = shareDefaults.url) {
  const canShare = Boolean(window.navigator.share)
  if (canShare) {
    await window.navigator.share({ title, url, text }).catch(() => {})
  } else if (Boolean(window.navigator.clipboard?.writeText)) {
    await window.navigator.clipboard.writeText(text + '\n' + url)
  } else return shareDefaults.failMsg
  return !canShare && shareDefaults.copyMsg
}

const shareScore = (guesses, guessCount, setCode, setAlert) => shareData(
  `${shareDefaults.text(setCode)}\n${blankArray.map((_,idx) =>
      guessCount === idx ? shareChars.right :
      !guesses[idx] ? shareChars.empty :
      !guesses[idx].text ? shareChars.skip :
      guesses[idx].partial ? shareChars.partial :
      shareChars.wrong
  ).join('')}\n`
).then((feedback) => feedback && setAlert && setAlert(feedback))

export default shareScore