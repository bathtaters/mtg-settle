import { WarningIcon } from "./Icons"
import { AlertWrapperStyle } from "../styles/AppStyles"
import useShowAlert from "../../services/subservices/alert.controller"


export default function Alert({ message, className = 'alert-warning', Icon = WarningIcon, setAlert }) {
  const { handleClick, hidden } = useShowAlert(message, setAlert)
  
  if (!message) return <AlertWrapperStyle hidden={true} />

  return (
    <AlertWrapperStyle onClick={handleClick} hidden={hidden} className={className}>
      {message && <>
        <Icon className="stroke-current flex-shrink-0 h-6 w-6" />
        <span>{message}</span>
      </>}
    </AlertWrapperStyle>
  )
}