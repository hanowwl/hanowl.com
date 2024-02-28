import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { AppLayout } from "src/components";
import { DEFAULT_SEO } from "src/constant";
import { globalStyle } from "src/styles";

import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Global styles={globalStyle} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
