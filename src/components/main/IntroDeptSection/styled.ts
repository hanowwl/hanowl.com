import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const IntroDeptSectionContainer = styled.div`
  row-gap: 6rem;
`;

export const IntroDeptSectionTeamContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 767px) {
    gap: 0.4rem;
  }
`;
