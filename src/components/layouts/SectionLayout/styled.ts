import styled from "@emotion/styled";

export const SectionLayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 6rem;
  padding: 16rem 0;
  @media screen and (max-width: 767px) {
    padding-bottom: 10rem;
  }
`;

export const SectionLayoutTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 0.6rem;
`;
