import styled from "@emotion/styled";

import { TextCustomProps } from ".";

export const TextElement = styled.p<Required<TextCustomProps>>`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: 1.3;
  @media screen and (max-width: 767px) {
    font-size: ${({ size }) => `${size * 0.8}rem`};
  }
  @media screen and (max-width: 360px) {
    font-size: ${({ size }) => `${size * 0.7}rem`};
  }
`;
