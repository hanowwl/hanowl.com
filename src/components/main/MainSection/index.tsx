import React, { useEffect, useState } from "react";

import { BannerPng } from "src/assets";
import { Text } from "src/components/common";
import { SuspenseFallback } from "src/components/common/SuspenseFallback";
import { Container } from "src/components/layouts";
import { colors } from "src/styles";

import * as S from "./styled";

export const MainSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const img = new Image();
    img.src = BannerPng.src;
    img.onload = () => setIsLoading(false);
  }, []);

  return (
    <section>
      {isLoading ? (
        <Container style={{ height: "calc(100vh - 9rem)", backgroundColor: colors.background }}>
          <SuspenseFallback />
        </Container>
      ) : (
        <S.MainSectionContainer onLoadedData={() => setIsLoading(false)}>
          <Text size={4} weight={700} style={{ textAlign: "center" }}>
            변화를 열망하는 사람들이 모여,
            <br />
            새로운 학교를 만듭니다.
          </Text>
          <Text size={2}>2024 HANOWL RECRUIT</Text>
        </S.MainSectionContainer>
      )}
    </section>
  );
};
