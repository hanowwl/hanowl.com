import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (min-width: 991px) {
    padding: 0 3.2rem !important;
  }

  @media screen and (max-width: 991px) {
    padding: 0 2.4rem !important;
  }
`;
