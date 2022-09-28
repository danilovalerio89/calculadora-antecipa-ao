import { useModal } from "../../providers/modalProvider";
import { ModalWrapper, Loading } from "./style";

function Modal() {
  const { modal, setModal } = useModal();

  return (
    <>
      {modal.delay && modal.openModal ? (
        <ModalWrapper>
          <Loading />
          <p>Calculando valores</p>
        </ModalWrapper>
      ) : modal.timeout && modal.openModal ? (
        <ModalWrapper> Time Out</ModalWrapper>
      ) : modal.internalError && modal.openModal ? (
        <ModalWrapper>Internal Error</ModalWrapper>
      ) : null}
    </>
  );
}
export default Modal;
