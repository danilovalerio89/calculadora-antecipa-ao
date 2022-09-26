import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 80%;
  p {
    color: var(--clr-sub-title-dark);
  }
  input {
    margin: 5px 0;
    border: 1px solid var(--clr-input-border);
    border-radius: 3px;
    outline-color: var(--clr-input-outline);
    padding: 10px;
  }
  span {
    color: var(--clr-span-input);
    font-size: 0.7rem;
    font-weight: 600;
  }
`;
