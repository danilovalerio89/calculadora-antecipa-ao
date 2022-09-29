import { CloseModalTimeOut } from "./style";

function ModalTimeOut({ closeTimeOutModal }) {
  return (
    <CloseModalTimeOut>
      <header>
        <button onClick={() => closeTimeOutModal()}>X</button>
      </header>
      <p>Ocorreu algum erro inesperado, tempo esgotado.</p>
      <footer>Tente novamente</footer>
    </CloseModalTimeOut>
  );
}
export default ModalTimeOut;
