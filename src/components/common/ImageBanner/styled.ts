import styled from "@emotion/styled";

export const ImageBannerContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;

  img {
    width: 40rem;
    height: 20rem;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 30rem;
      height: 15rem;
    }
  }
`;
