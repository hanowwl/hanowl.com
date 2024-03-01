import React from "react";

import { TeamBox, TeamBoxCustomProps } from "src/components/common";
import { SectionLayout } from "src/components/layouts";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";

export interface TeamsSectionProps {
  teams: TeamBoxCustomProps[];
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ teams }) => {
  const { isApp } = useCheckAppStore();

  return (
    <SectionLayout subTitle="부서 소개" title={`여러분의 재능을 펼칠 부서,\n소개합니다.`}>
      <S.TeamsSectionContainer isApp={isApp}>
        {teams.map((props, index) => (
          <TeamBox key={index} {...props} />
        ))}
      </S.TeamsSectionContainer>
    </SectionLayout>
  );
};
