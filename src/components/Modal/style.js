import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 1;
  position: absolute;
  height: 250px;
  width: 250px;
  background-color: var(--clr-background-blue);
  border: 1px solid var(--clr-border);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 25px;
  }
`;
