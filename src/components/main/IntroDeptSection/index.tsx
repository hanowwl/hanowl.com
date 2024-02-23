import React from "react";

import { SectionLayout } from "src/components/layouts";
import { useFadeInScroll } from "src/components/hooks";
import { Text } from "src/components/common";

import * as S from "./styled";

export const IntroDeptSection: React.FC = () => {
  const { fadeInScroll } = useFadeInScroll();

  return (
    <SectionLayout
      subTitle="부서 소개"
      title={`여러분의 재능을 펼칠 부서,\n소개합니다.`}
      hadFadeInAnimation
    >
      <S.IntroDeptSectionContainer>
        <S.IntroDeptSectionTeamContainer {...fadeInScroll({ delay: 0.2 })}>
          <Text size={2} weight={700} style={{ textAlign: "center" }}>
            here is introduce department
          </Text>
        </S.IntroDeptSectionTeamContainer>
      </S.IntroDeptSectionContainer>
    </SectionLayout>
  );
};
