import styled from "styled-components";

export const CenterDiv = styled.div`
  border: 1px solid var(--clr-border);
  background-color: var(--clr-background-white);
`;

export const TitleBox = styled.div`
  header {
    margin: 10px 0;
    font-size: 2rem;
    font-weight: 600;
    color: var(--clr-title-dark);
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
