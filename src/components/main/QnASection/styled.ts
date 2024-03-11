import { Container } from "src/components/layouts";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const QnASectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  flex-grow: 0.8;
  overflow: scroll;
`;

export const QnASectionTeamContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media screen and (max-width: 767px) {
    gap: 0.4rem;
  }
`;

export const QnASectionCardContainer = styled(motion.div)<{ isApp: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-bottom: ${({ isApp }) => (isApp ? "3rem" : "8rem")};
`;
