import { colors } from "src/styles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MainPageContainer = styled.main<{ isApp: boolean }>`
  @media screen and (min-width: 992px) {
    overflow-y: scroll;
    height: 100vh;
    scroll-snap-type: y mandatory;
    background-color: ${colors.background};
    & > section {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
  ${({ isApp }) =>
    isApp &&
    css`
      overflow-y: scroll;
      height: 100vh;
      scroll-snap-type: y mandatory;
      background-color: ${colors.background};
      & > section {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
    `}
`;
