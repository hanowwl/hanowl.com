import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SectionLayoutContainer = styled.section<{ isApp: boolean }>`
  min-height: 100svh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 6rem;
  padding-top: 10rem;
  padding-bottom: ${({ isApp }) => (isApp ? "10rem" : "4rem")};
  @media screen and (max-width: 767px) {
    row-gap: 3rem;
  }
`;

export const SectionLayoutTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 2rem;
`;
