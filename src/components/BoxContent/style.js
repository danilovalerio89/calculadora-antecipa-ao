import styled from "styled-components";

export const FlexSection = styled.section`
  border: 1px solid var(--clr-border);
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
