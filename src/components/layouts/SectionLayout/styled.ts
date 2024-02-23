import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SectionLayoutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 6rem;
  padding: 16rem 0;
  @media screen and (max-width: 767px) {
    padding-bottom: 10rem;
  }
`;

export const SectionLayoutTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 2rem;
`;
