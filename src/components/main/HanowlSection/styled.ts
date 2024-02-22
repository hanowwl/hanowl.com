import styled from "@emotion/styled";

export const HanowlSectionRecordContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.6rem;
  }
`;
