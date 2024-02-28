import { colors } from "src/styles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TeamContainer = styled.div<{ isApp: boolean }>`
  padding-top: ${({ isApp }) => (isApp ? "0" : "10rem")};
  padding-bottom: ${({ isApp }) => (isApp ? "0" : "4rem")};
  min-height: 100vh;
`;

export const TeamTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const TeamDescription = styled.p`
  font-size: 1.5rem;
  color: ${colors.gray};
  line-height: 1.3;
`;

export const TeamIntroduceContainer = styled.div<{ isApp: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  row-gap: 4rem;
  align-items: flex-start;
  justify-content: flex-start;
  ${({ isApp }) =>
    isApp &&
    css`
      padding: 0;
    `}
`;

export const TeamList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 2rem;
  row-gap: 0.4rem;
`;

export const TeamItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  float: left;
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${({ isActive }) => isActive && colors.qnaCard};
  transition: background-color 150ms;
  cursor: pointer;
`;
