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

export const Loading = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: var(--white);
  animation: spinner-a4dj62 1s infinite linear;

  ::before,
  ::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: spinner-a4dj62 2s infinite;
  }
  ::after {
    margin: 8px;
    animation-duration: 3s;
  }
  @keyframes spinner-a4dj62 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
