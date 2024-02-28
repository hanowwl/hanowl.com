import { css } from "@emotion/react";

import { colors } from "./colors";
import { reset } from "./reset";

export const globalStyle = (bgColor: string) => css`
  ${reset}

  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    scrollbar-width: none;
    -ms-overflow-style: none;
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    color: ${colors.text};
    background-color: ${bgColor};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  #__next {
    font-size: 1.6rem;
    font-weight: 400;
    font-family:
      Pretendard Variable,
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif;
    letter-spacing: -0.04em;
  }

  br.mobile-only {
    display: none;
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 9px;
    }
    br.mobile-only {
      display: block;
    }

    br.desktop-only {
      display: none;
    }
  }
`;
