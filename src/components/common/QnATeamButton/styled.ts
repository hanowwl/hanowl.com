import Image from "next/image";

import { colors } from "src/styles";

import styled from "@emotion/styled";

import { QnATeamButtonCustomProps } from ".";

export const QnATeamButton = styled.div<Pick<QnATeamButtonCustomProps, "isSelected">>`
  background-color: ${({ isSelected }) => (isSelected ? colors.qnaClicked : colors.card)};
  padding: 1.6rem 0;
  display: flex;
  justify-content: center;
  column-gap: 1.2rem;
  align-items: center;
  border-radius: 1.2rem;
  transition: background-color 180ms;
  @media screen and (max-width: 767px) {
    padding: 1.2rem 0;
  }
`;

export const QnATeamIcon = styled(Image)`
  width: 2.6rem;
  height: 2.6rem;
  @media screen and (max-width: 767px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
