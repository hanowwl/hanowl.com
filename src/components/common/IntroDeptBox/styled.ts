import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

export const IntroDeptBox = styled.div`
  background-color: ${colors.card};
  padding: 5rem 15px;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  transition: background-color 180ms;
  @media screen and (max-width: 767px) {
    padding: 1.2rem 5px;
  }
`;

export const IntroTeamIcon = styled(Image)`
  width: 4.6rem;
  height: 4.6rem;
  @media screen and (max-width: 767px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ArrowIcon = styled(Image)`
  width: 1.3rem;
  height: 1.6rem;
  @media screen and (max-width: 767px) {
    width: 0.4rem;
    height: 0.6rem;
  }
`;
