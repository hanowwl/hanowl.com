import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

export const IntroDeptBox = styled.div`
  background-color: ${colors.card};
  padding: 1rem 15px;
  border-radius: 1.2rem;
  @media screen and (max-width: 767px) {
    padding: 0.5rem 5px;
  }
`;

export const IntroDeptsecondbox = styled.div`
  padding: 1rem;
  @media screen and (max-width: 767px) {
    padding: 0.5rem 5px;
  }
`;

export const ArrowIcon = styled(Image)`
  float: right;
  width: 1.3rem;
  height: 1.6rem;
`;

export const IntroTeamIcon = styled(Image)`
  width: 4.6rem;
  height: 4.6rem;
  @media screen and (max-width: 767px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
