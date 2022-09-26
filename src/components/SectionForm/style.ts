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
