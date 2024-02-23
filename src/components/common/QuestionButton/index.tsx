import React from "react";

import { QnAMenuItem } from "src/components/main/QnASection";

import * as S from "./styled";
import { Text } from "../Text";

export type QuestionCustomButtonProps = Omit<QnAMenuItem, "list" | "id"> & {
  isSelected?: boolean;
};

export type QuestionButtonProps = QuestionCustomButtonProps & React.HTMLAttributes<HTMLDivElement>;

export const QuestionButton: React.FC<QuestionButtonProps> = ({
  text,
  icon,
  isSelected,
  ...props
}) => {
  return (
    <S.QuestionButton isSelected={isSelected} {...props}>
      <S.QuestionButtonIcon src={icon} alt={text} quality={100} />
      <Text size={1.8}>{text}</Text>
    </S.QuestionButton>
  );
};
