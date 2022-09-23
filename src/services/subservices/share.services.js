import { shareDefaults, shareChars, maxGuessCount } from "../../assets/constants"

async function shareData(text, title = shareDefaults.title, url = shareDefaults.url) {
  const canShare = Boolean(window.navigator.share)
  if (canShare) {
    await window.navigator.share({ title, url, text }).catch(() => {})
  } else if (Boolean(window.navigator.clipboard?.writeText)) {
    await window.navigator.clipboard.writeText(text + '\n' + url)
  } else return shareDefaults.failMsg
  return !canShare && shareDefaults.copyMsg
}

const repeatChar = (char, count) => [...Array(count)].map(() => char).join('')

const shareScore = (guessCount, setCode, setAlert) => shareData(
  `${shareDefaults.text(setCode)}\n${
    guessCount < 0 ?
      repeatChar(shareChars.wrong, maxGuessCount) :
      repeatChar(shareChars.wrong, guessCount) + shareChars.right + repeatChar(shareChars.empty, maxGuessCount - guessCount - 1)
  }\n`
).then((feedback) => feedback && setAlert && setAlert(feedback))

export default shareScore