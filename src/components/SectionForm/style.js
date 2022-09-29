import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: var(--clr-background-white);
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding: 25px;
  }
`;

export const TitleBox = styled.header`
  display: flex;
  justify-content: center;
  h1 {
    margin: 10px 0;
    font-size: 1.17rem;
    font-weight: 600;
    color: var(--clr-title-dark);
    width: 80%;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Test = styled.input`
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  width: 25px;
  margin-left: 4px;
`;

export const DivButtons = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  button {
    padding: 5px;
    background-color: var(--clr-input-border);
    border: 1px solid var(--clr-input-error);
    color: var(--clr-title-dark);
    border-radius: 5px;
  }
`;
