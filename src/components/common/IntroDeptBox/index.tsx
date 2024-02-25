import React from "react";

import { IntroMenuItem } from "src/components/main/IntroDeptSection";

import * as S from "./styled";
import { Text } from "../Text";

export type IntroDeptBoxCustomProps = IntroMenuItem;

export type IntroDeptBoxProps = IntroDeptBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const IntroDeptBox: React.FC<IntroDeptBoxProps> = ({
  text,
  icon,
  intro,
  introSecond,
  arrow,
}) => {
  return (
    <S.IntroDeptBox>
      <S.IntroDeptsecondbox>
        <S.IntroTeamIcon src={icon} alt={text} quality={100} />
        <Text size={1.3}>{text}</Text>
        <Text size={2.2} weight={700}>
          {intro}
          <br />
          {introSecond}
        </Text>
      </S.IntroDeptsecondbox>
      <S.IconBox>
        <S.ArrowIcon src={arrow} alt={text} quality={100} />
      </S.IconBox>
    </S.IntroDeptBox>
  );
};
