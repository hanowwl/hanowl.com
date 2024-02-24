import { StaticImageData } from "next/image";

import styled from "@emotion/styled";

export const ImageBannerContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2.8rem;
`;

export const Image = styled.div<{ src: StaticImageData }>`
  background-image: url(${({ src }) => src.src});
  background-size: cover;
  background-position: center;
  width: 40rem;
  height: 20rem;
  margin: 0 1.5rem 0 1.5rem;
  border-radius: 2rem;
  @media screen and (max-width: 767px) {
    width: 30rem;
    height: 15rem;
  }
`;
