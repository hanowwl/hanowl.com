import { BannerPng } from "src/assets";

import styled from "@emotion/styled";

export const MainSectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${BannerPng.src});
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  background-color: rgba(27, 26, 26, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.6rem;
`;
