import { colors } from "src/styles";

import styled from "@emotion/styled";

export const TeamContainer = styled.div<{ isApp: boolean }>`
  padding-bottom: 10rem;
  background-color: #2a2b2e;
  body {
    background-color: #2a2b2e;
  }
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

export const TeamIntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  row-gap: 4rem;
  align-items: flex-start;
  justify-content: flex-start;
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