import React from "react";

import * as I from "src/assets";
import { IntroMenuItem } from "src/components/main/IntroDeptSection";

import * as S from "./styled";

export type IntroDeptBoxCustomProps = IntroMenuItem;

export type IntroDeptBoxProps = IntroDeptBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const IntroDeptBox: React.FC<IntroDeptBoxProps> = ({
  team: text,
  icon,
  introFirst,
  introSecond,
  ...props
}) => {
  return (
    <S.IntroDeptBoxContainer {...props}>
      <S.IntroTeamIcon src={icon} alt={text} quality={100} />
      <S.IntroDeptBoxTeam>{text}</S.IntroDeptBoxTeam>
      <S.IntroDeptBoxTitle>
        {introFirst}
        <br />
        {introSecond}
        <S.IntroDeptBoxArrowIcon src={I.arrow} alt={text} quality={100} />
      </S.IntroDeptBoxTitle>
    </S.IntroDeptBoxContainer>
  );
};
