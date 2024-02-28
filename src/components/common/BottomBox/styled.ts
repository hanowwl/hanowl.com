import Image from "next/image";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BottomBoxWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    left: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomBoxContainer = styled.div`
  margin: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20rem);
  border-radius: 1.6rem;
  padding: 1.6rem;
  user-select: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const BottomBoxContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.2rem;
  img {
    width: 6rem;
    height: 100%;
    border-radius: 1.4rem;
  }
`;

export const BottomBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const BottomBoxBoldText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const BottomBoxText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
`;

export const BottomBoxCloseIcon = styled(Image)`
  width: 4rem;
  height: 4rem;
  padding: 0;
  border: 1px solid red;
`;
