import React from "react";

import { IntroDeptBox, IntroDeptBoxCustomProps } from "src/components/common";
import { SectionLayout } from "src/components/layouts";

import * as S from "./styled";

export interface IntroDeptSectionProps {
  IntroList: IntroDeptBoxCustomProps[];
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
