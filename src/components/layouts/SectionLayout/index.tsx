import React from "react";

import { Text } from "src/components/common";
import { useFadeInScroll } from "src/hooks";
import { useCheckAppStore } from "src/store";

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
  const { isApp } = useCheckAppStore();

  const { fadeInScroll } = useFadeInScroll();

  return (
    <S.SectionLayoutContainer isApp={isApp} {...props}>
      <Container>
        <S.SectionLayoutTitleContainer {...fadeInScroll({ delay: 0 })}>
          <Text size={1.8}>{subTitle}</Text>
          {title.includes("\n") ? (
            title.split("\n").map((text, index) => (
              <Text size={3.6} weight={700} key={index} style={{ lineHeight: 0.8 }}>
                {text}
              </Text>
            ))
          ) : (
            <Text size={3.6} weight={700}>
              {title}
            </Text>
          )}
        </S.SectionLayoutTitleContainer>
      </Container>
      {fullWidth ? children : <Container>{children}</Container>}
    </S.SectionLayoutContainer>
  );
};
