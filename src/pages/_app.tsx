import { useEffect } from "react";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { AppLayout } from "src/components";
import { DEFAULT_SEO } from "src/constant";
import { useQueryParams } from "src/hooks";
import { useCheckAppStore } from "src/store";
import { colors, globalStyle } from "src/styles";

import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  const { setIsApp, isApp } = useCheckAppStore();
  const queryParams = useQueryParams<{ isApp: boolean }>();

  useEffect(() => {
    setIsApp(Boolean(queryParams.isApp));
  }, [queryParams.isApp, setIsApp]);

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Global styles={[globalStyle(isApp ? colors.appBackground : colors.background)]} />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
