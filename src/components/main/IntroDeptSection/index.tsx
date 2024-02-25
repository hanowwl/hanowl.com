import React from "react";

import { StaticImageData } from "next/image";

import { IntroDeptBox } from "src/components/common";
import { useFadeInScroll } from "src/components/hooks";
import { SectionLayout } from "src/components/layouts";

import * as S from "./styled";

export interface IntroMenuItem {
  text: string;
  intro: string;
  introSecond: string;
  icon: StaticImageData;
  arrow: StaticImageData;
}

export interface IntroDeptSectionProps {
  IntroList: IntroMenuItem[];
}

export const IntroDeptSection: React.FC<IntroDeptSectionProps> = ({ IntroList }) => {
  const { fadeInScroll } = useFadeInScroll();

  return (
    <SectionLayout
      subTitle="부서 소개"
      title={`여러분의 재능을 펼칠 부서,\n소개합니다.`}
      hadFadeInAnimation
    >
      <S.IntroDeptSectionContainer>
        <S.IntroDeptSectionTeamContainer {...fadeInScroll({ delay: 0.2 })}>
          {IntroList.map(({ text, icon, intro, introSecond, arrow }, index) => (
            <IntroDeptBox
              key={index}
              text={text}
              icon={icon}
              intro={intro}
              introSecond={introSecond}
              arrow={arrow}
            />
          ))}
        </S.IntroDeptSectionTeamContainer>
      </S.IntroDeptSectionContainer>
    </SectionLayout>
  );
};
