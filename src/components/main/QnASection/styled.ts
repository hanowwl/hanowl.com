import styled from "@emotion/styled";

export const QnASectionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media screen and (max-width: 767px) {
    gap: 0.4rem;
  }
`;
