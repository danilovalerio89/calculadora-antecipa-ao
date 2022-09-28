import { useModal } from "../../providers/modalProvider";
import { ModalWrapper, Loading, CloseModalTimeOut } from "./style";

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
          <Loading />
          <p>Calculando valores</p>
        </ModalWrapper>
      ) : modal.timeout && modal.openModal ? (
        <ModalWrapper>
          <CloseModalTimeOut>
            <header>
              <button onClick={() => closeTimeOutModal()}>X</button>
            </header>
            <p>Ocorreu algum erro inesperado, tempo esgotado.</p>
            <footer>Tente novamente</footer>
          </CloseModalTimeOut>
        </ModalWrapper>
      ) : modal.internalError && modal.openModal ? (
        <ModalWrapper>Internal Error</ModalWrapper>
      ) : null}
    </>
  );
}
export default Modal;
