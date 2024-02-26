import React from "react";

import { StaticImageData } from "next/image";

import { IntroDeptBox } from "src/components/common";
import { SectionLayout } from "src/components/layouts";
import { TEAM_ID_TO_TEXT } from "src/constant";

import * as S from "./styled";

export interface IntroMenuItem {
  team: (typeof TEAM_ID_TO_TEXT)[keyof typeof TEAM_ID_TO_TEXT];
  introFirst: string;
  introSecond: string;
  icon: StaticImageData;
}

export interface IntroDeptSectionProps {
  IntroList: IntroMenuItem[];
}

export const IntroDeptSection: React.FC<IntroDeptSectionProps> = ({ IntroList }) => {
  return (
    <SectionLayout
      subTitle="부서 소개"
      title={`여러분의 재능을 펼칠 부서,\n소개합니다.`}
      hadFadeInAnimation
    >
      <S.IntroDeptSectionTeamContainer>
        {IntroList.map((props, index) => (
          <IntroDeptBox key={index} {...props} />
        ))}
      </S.IntroDeptSectionTeamContainer>
    </SectionLayout>
  );
};
