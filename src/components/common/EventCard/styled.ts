import { StaticImageData } from "next/image";

import styled from "@emotion/styled";

export const EventCard = styled.div<{ src: StaticImageData }>`
  width: 100%;
  height: 22rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  padding: 1.4rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${({ src }) => src.src});
  background-size: cover;
  background-position: center;
  cursor: default;
  row-gap: 0.3rem;
  @media screen and (max-width: 767px) {
    height: 100%;
    flex-grow: 1;
  }
`;
