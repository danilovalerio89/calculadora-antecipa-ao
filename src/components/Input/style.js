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
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

export const MinimalInput = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  p {
    color: var(--clr-sub-title-dark);
  }
  input {
    width: 25px;
  }
`;
export const NormalSpan = styled.span`
  color: var(--clr-span-input);
`;

export const SpanError = styled.span`
  color: var(--clr-input-error);
`;
