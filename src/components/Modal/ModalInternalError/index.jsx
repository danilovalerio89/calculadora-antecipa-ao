import { ModalError } from "./style";

function ModalInternalError() {
  return (
    <>
      <ModalError>
        <h1>Erro interno!</h1>
        <p>Por gentileza atualize a página (F5)</p>
      </ModalError>
    </>
  );
}
export default ModalInternalError;
