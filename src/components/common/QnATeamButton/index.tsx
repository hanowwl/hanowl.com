import React from "react";

import { QnAMenuItem } from "src/components/main/QnASection";

import * as S from "./styled";
import { Text } from "../Text";

export type QnATeamButtonCustomProps = Omit<QnAMenuItem, "list" | "id"> & {
  isSelected?: boolean;
};

export type QnATeamButtonProps = QnATeamButtonCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const QnATeamButton: React.FC<QnATeamButtonProps> = ({
  team: text,
  icon,
  isSelected,
  ...props
}) => {
  return (
    <S.QnATeamButton isSelected={isSelected} {...props}>
      <S.QnATeamIcon src={icon} alt={text} quality={100} />
      <Text size={1.8}>{text}</Text>
    </S.QnATeamButton>
  );
};
