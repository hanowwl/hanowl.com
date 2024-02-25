import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

export const IntroDeptBox = styled.div`
  background-color: ${colors.card};
  padding: 4rem 15px;
  border-radius: 1.2rem;
  transition: background-color 180ms;
  @media screen and (max-width: 767px) {
    padding: 1.2rem 5px;
  }
`;

export const IntroDeptsecondbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  transition: background-color 180ms;
  @media screen and (max-width: 767px) {
    padding: 3.2rem 5px;
  }
`;

export const IconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ArrowIcon = styled(Image)`
  margin-bottom: -20px;
  display: flex;
  width: 1.3rem;
  height: 1.6rem;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
    width: 1rem;
    height: 1.3rem;
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
