import React from "react";

import * as S from "./styled";

export interface TextCustomProps {
  children: React.ReactNode;
  size?: number;
  weight?: number;
}

export type TextProps = TextCustomProps & React.HTMLAttributes<HTMLParagraphElement>;

export const Text: React.FC<TextProps> = ({ children, size = 1.1, weight = 400, ...props }) => {
  return (
    <S.TextElement size={size} weight={weight} {...props}>
      {children}
    </S.TextElement>
  );
};
