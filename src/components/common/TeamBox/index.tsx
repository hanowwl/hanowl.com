import React from "react";

import { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import * as I from "src/assets";
import { TEAM_ID_TO_TEXT, TEAM_TEXT_TO_ID } from "src/constant";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";
import { Text } from "../Text";

export interface TeamBoxCustomProps {
  team: (typeof TEAM_ID_TO_TEXT)[keyof typeof TEAM_ID_TO_TEXT];
  description: React.ReactNode;
  icon: StaticImageData;
}

export type TeamBoxProps = TeamBoxCustomProps & React.HTMLAttributes<HTMLDivElement>;

export const TeamBox: React.FC<TeamBoxProps> = ({ team, icon, description, ...props }) => {
  const { isApp } = useCheckAppStore();

  const route = useRouter();

  const onClick = () => {
    if (window.ReactNativeWebView && isApp) {
      window.ReactNativeWebView.postMessage(TEAM_TEXT_TO_ID[team]);
    } else {
      route.push(`/teams/${TEAM_TEXT_TO_ID[team]}`);
    }
  };

  return (
    <S.TeamBox {...props} onClick={onClick}>
      <S.TeamBoxIcon src={icon} alt={team} quality={100} />
      <Text size={1.8}>{team}</Text>
      <Text size={2.4} weight={700}>
        {description}
        <S.TeamBoxLinkIcon src={I.ArrowIcon} alt={team} quality={100} />
      </Text>
    </S.TeamBox>
  );
};
