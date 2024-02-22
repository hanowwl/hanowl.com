import React from "react";

import { Text } from "src/components/common";

import * as S from "./styled";
import { Container } from "../Container";

export interface SectionLayoutCustomProps {
  subTitle: string;
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export type SectionLayoutProps = SectionLayoutCustomProps & React.HTMLAttributes<HTMLElement>;

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  subTitle,
  title,
  fullWidth,
  ...props
}) => {
  return (
    <S.SectionLayoutContainer {...props}>
      <Container>
        <S.SectionLayoutTitleContainer>
          <Text size={1.8}>{subTitle}</Text>
          <Text size={3.6} weight={700}>
            {title}
          </Text>
        </S.SectionLayoutTitleContainer>
      </Container>
      {fullWidth ? children : <Container>{children}</Container>}
    </S.SectionLayoutContainer>
  );
};
