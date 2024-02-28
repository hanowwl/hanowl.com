import { colors } from "src/styles";

import styled from "@emotion/styled";

export const MainPageContainer = styled.main<{ isApp: boolean }>`
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  background-color: ${colors.background};
  & > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;
