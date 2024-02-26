import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

export const IntroDeptBoxContainer = styled.div`
  background-color: ${colors.card};
  padding: 1.4rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  @media screen and (max-width: 767px) {
    row-gap: 0.4rem;
    padding: 1.6rem;
  }
`;

export const IntroDeptBoxArrowIcon = styled(Image)`
  float: right;
  width: 2rem;
  height: 2rem;
`;

export const IntroDeptBoxTeam = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.3;
`;

export const IntroDeptBoxTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const IntroTeamIcon = styled(Image)`
  width: 4.6rem;
  height: 4.6rem;
  @media screen and (max-width: 767px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
