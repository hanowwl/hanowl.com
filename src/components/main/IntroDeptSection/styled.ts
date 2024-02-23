import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const IntroDeptSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
`;

export const IntroDeptSectionTeamContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media screen and (max-width: 767px) {
    gap: 0.4rem;
  }
`;
