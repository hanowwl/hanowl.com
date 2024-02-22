import React from "react";

import { Text } from "src/components/common";

import * as S from "./styled";
import { Container } from "../Container";

export interface SectionLayoutProps {
  subTitle: string;
  title: string;
  children: React.ReactNode;
  height?: string;
  fullWidth?: boolean;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  subTitle,
  title,
  height,
  fullWidth,
}) => {
  return (
    <S.SectionLayoutContainer height={height}>
      <Container>
        <S.SectionLayoutTitleContainer>
          <Text size={1.4}>{subTitle}</Text>
          <Text size={3} weight={700}>
            {title}
          </Text>
        </S.SectionLayoutTitleContainer>
      </Container>
      {fullWidth ? children : <Container>{children}</Container>}
    </S.SectionLayoutContainer>
  );
};
