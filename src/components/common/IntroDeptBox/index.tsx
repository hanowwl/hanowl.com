import React from "react";
import * as I from "src/assets";

import { IntroMenuItem } from "src/components/main/IntroDeptSection";

import * as S from "./styled";
import { Text } from "../Text";

export type IntroDeptBoxCustomProps = IntroMenuItem;

export type IntroDeptBoxProps = IntroDeptBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const IntroDeptBox: React.FC<IntroDeptBoxProps> = ({
  text,
  icon,
  introFirst,
  introSecond,
}) => {
  return (
    <S.IntroDeptBox>
      <S.IntroDeptsecondbox>
        <S.IntroTeamIcon src={icon} alt={text} quality={100} />
        <Text size={1.2}>{text}</Text>
        <Text size={1.8} weight={600}>
          {introFirst}
          <br />
          {introSecond}
          <S.ArrowIcon src={I.arrow} alt={text} quality={100} />
        </Text>
      </S.IntroDeptsecondbox>
    </S.IntroDeptBox>
  );
};
