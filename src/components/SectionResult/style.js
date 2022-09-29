import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  background-color: var(--clr-background-blue);

  @media (min-width: 768px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  h1 {
    width: 80%;
    color: var(--clr-title-blue);
    border-bottom: 1px solid var(--clr-title-blue);
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  p {
    width: 80%;
    margin: 10px 0;
    color: var(--clr-font-blue);
    font-style: italic;
  }
`;
