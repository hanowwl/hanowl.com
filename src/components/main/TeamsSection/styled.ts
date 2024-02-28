import styled from "@emotion/styled";

export const TeamsSectionContainer = styled.div<{ isApp: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 767px) {
    padding-bottom: ${({ isApp }) => (isApp ? "4rem" : "0")};
    grid-template-columns: repeat(1, 1fr);
  }
`;
