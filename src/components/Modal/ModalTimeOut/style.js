import styled from "styled-components";

export const CloseModalTimeOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  p {
    margin: 0;
    padding: 0 15px;
  }
  header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    button {
      padding: 5px;
      background-color: var(--clr-title-blue);
      border: 1px solid var(--clr-input-border);
      margin: 3px 6px;
      width: 25px;
    }
  }
  footer {
    padding-bottom: 5px;
  }
`;
