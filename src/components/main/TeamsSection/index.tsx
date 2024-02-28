import React, { useRef } from "react";

import { TeamBox, TeamBoxCustomProps } from "src/components/common";
import { SectionLayout } from "src/components/layouts";
import { useCheckAppStore } from "src/store";

import * as S from "./styled";

export interface TeamsSectionProps {
  teams: TeamBoxCustomProps[];
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ teams }) => {
  const { isApp } = useCheckAppStore();

  const sectionRef = useRef<HTMLElement>(null);

  const onTouchMove = () => {
    if (sectionRef.current) {
      const height = sectionRef.current.clientHeight;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < -(height / 4.5)) {
        sectionRef.current.style.scrollSnapAlign = "end";
      } else {
        sectionRef.current.style.scrollSnapAlign = "start";
      }
    }
  };

  return (
    <section ref={sectionRef} onTouchMove={onTouchMove}>
      <SectionLayout subTitle="부서 소개" title={`여러분의 재능을 펼칠 부서,\n소개합니다.`}>
        <S.TeamsSectionContainer isApp={isApp}>
          {teams.map((props, index) => (
            <TeamBox key={index} {...props} />
          ))}
        </S.TeamsSectionContainer>
      </SectionLayout>
    </section>
  );
};
