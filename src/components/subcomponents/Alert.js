import { WarningIcon } from "./Icons"
import { AlertWrapperStyle } from "../styles/appStyles"
import useShowAlert from "../../services/alert.controller"


export default function Alert({ message, clearMessage }) {
  const handleClick = useShowAlert(message, clearMessage)

  return Boolean(message) && (
    <AlertWrapperStyle onClick={handleClick}>
      <WarningIcon className="stroke-current flex-shrink-0 h-6 w-6" />
      <span>{message}</span>
    </AlertWrapperStyle>
  )
}