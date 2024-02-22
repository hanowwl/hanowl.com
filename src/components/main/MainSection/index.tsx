import React from "react";

import { Text } from "src/components/common";

import * as S from "./styled";

export const MainSection: React.FC = () => {
  return (
    <S.MainSectionContainer>
      <Text size={4} weight={700} style={{ textAlign: "center" }}>
        변화를 열망하는 사람들이 모여,
        <br />
        새로운 학교를 만듭니다.
      </Text>
      <Text size={2}>2024 HANOWL RECRUIT</Text>
    </S.MainSectionContainer>
  );
};
