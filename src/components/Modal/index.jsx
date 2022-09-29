import { useModal } from "../../providers/modalProvider";
import ModalDelay from "./ModalDelay";
import ModalInternalError from "./ModalInternalError";
import ModalTimeOut from "./ModalTimeOut";
import { ModalWrapper } from "./style";

function Modal() {
  const { modal, setModal } = useModal();

  const closeTimeOutModal = () => {
    setModal({
      delay: false,
      timeout: !modal.timeout,
      internalError: false,
      openModal: false,
    });
  };

  return (
    <>
      {modal.delay && modal.openModal ? (
        <ModalWrapper>
          <ModalDelay />
        </ModalWrapper>
      ) : modal.timeout && modal.openModal ? (
        <ModalWrapper>
          <ModalTimeOut closeTimeOutModal={closeTimeOutModal} />
        </ModalWrapper>
      ) : modal.internalError && modal.openModal ? (
        <ModalWrapper>
          <ModalInternalError />
        </ModalWrapper>
      ) : null}
    </>
  );
}
export default Modal;
