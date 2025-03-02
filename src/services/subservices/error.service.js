import { postAPI } from "./fetch.service"

const reportError = async (error) => {
    if (!error || !error.message) return;
    await postAPI('error', { message: error.message, stack: error.stack })
}

export default function initErrorReporter() {
    window.addEventListener('error', reportError)
    window.addEventListener('unhandledrejection', (ev) => { reportError({ message: ev.reason, stack: "async" }) })
}