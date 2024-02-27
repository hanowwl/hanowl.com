import { colors } from "src/styles";

import styled from "@emotion/styled";

export const MainPageContainer = styled.main`
  background-color: ${colors.background};
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  & > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;
