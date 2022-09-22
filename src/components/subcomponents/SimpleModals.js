import InfoText from "../../assets/InfoText"
import ModalBase from "./Modal/ModalBase"
import { AboutBodyStyle } from "../styles/SimpleModalStyles"
import { modalIds } from "../../assets/constants"

export function AboutModal({ openModal, setModal }) {
  return (
    <ModalBase
      title="About" modalId={modalIds.about} openModal={openModal} setModal={setModal}
      renderBody={() => (<AboutBodyStyle><InfoText /></AboutBodyStyle>)}
    />
  )
}