import { StaticImageData } from "next/image";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EventSectionContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const EventSectionContentContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    grid-gap: 2rem;
  }
`;

export const EventSectionContent = styled.div<{ src: StaticImageData }>`
  width: 36rem;
  height: 22rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  padding: 1.4rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ src }) => src.src});
  background-size: cover;
  background-position: center;
  cursor: default;
`;
