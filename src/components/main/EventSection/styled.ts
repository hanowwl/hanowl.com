import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EventSectionContentContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100%;
  height: 100%;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (min-width: 991px) {
    padding: 0 3.2rem !important;
  }

  @media screen and (max-width: 991px) {
    padding: 0 2.4rem !important;
  }

  @media screen and (max-width: 767px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
