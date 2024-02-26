import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SectionLayoutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 6rem;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    padding: 4rem 0;
  }
`;

export const SectionLayoutTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 2rem;
`;
