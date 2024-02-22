import styled from "@emotion/styled";

import { TextCustomProps } from ".";

export const TextElement = styled.p<Required<TextCustomProps>>`
  font-size: ${({ size }) => `${size}rem`};
  font-weight: ${({ weight }) => weight};
  line-height: 1.3;
`;
