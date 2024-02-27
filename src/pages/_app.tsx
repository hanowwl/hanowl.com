import type { AppProps } from "next/app";

import { globalStyle } from "src/styles";

import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
