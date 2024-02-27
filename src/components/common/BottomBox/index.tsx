import React from "react";

import Image from "next/image";

import { HanumPng } from "src/assets";

import * as S from "./styled";

export const BottomBox: React.FC = () => {
  return (
    <S.BottomBoxWrapper>
      <S.BottomBoxContainer>
        <Image src={HanumPng} alt="한움" quality={100} />
        <S.BottomBoxTextContainer>
          <S.BottomBoxBoldText>학생회에 관심이 있으신가요?</S.BottomBoxBoldText>
          <S.BottomBoxText>
            교내 통합 플랫폼 한움에서
            <br />더 많은 정보를 확인하고 지원해보세요!
          </S.BottomBoxText>
        </S.BottomBoxTextContainer>
      </S.BottomBoxContainer>
    </S.BottomBoxWrapper>
  );
};
