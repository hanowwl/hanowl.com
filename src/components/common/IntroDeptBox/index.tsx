import React from "react";

import { StaticImageData } from "next/image";

import * as I from "src/assets";
import { TEAM_ID_TO_TEXT } from "src/constant";

import * as S from "./styled";

export interface IntroDeptBoxCustomProps {
  team: (typeof TEAM_ID_TO_TEXT)[keyof typeof TEAM_ID_TO_TEXT];
  description: React.ReactNode;
  icon: StaticImageData;
}

export type IntroDeptBoxProps = IntroDeptBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const IntroDeptBox: React.FC<IntroDeptBoxProps> = ({
  team,
  icon,
  description,
  ...props
}) => {
  return (
    <S.IntroDeptBoxContainer {...props}>
      <S.IntroTeamIcon src={icon} alt={team} quality={100} />
      <S.IntroDeptBoxTeam>{team}</S.IntroDeptBoxTeam>
      <S.IntroDeptBoxTitle>
        {description}
        <S.IntroDeptBoxArrowIcon src={I.arrow} alt={team} quality={100} />
      </S.IntroDeptBoxTitle>
    </S.IntroDeptBoxContainer>
  );
};
