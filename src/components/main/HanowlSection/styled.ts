import styled from "@emotion/styled";

export const HanowlSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10rem;
  @media screen and (max-height: 767px) {
    flex: 1;
    row-gap: 4rem;
    justify-content: space-between;
  }
`;

export const HanowlSectionRecordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.6rem;
  }
`;
