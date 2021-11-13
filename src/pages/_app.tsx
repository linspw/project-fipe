import { GlobalStyle } from "@styles/global-style";
import type { AppProps } from "next/app";
import { DefaultLayout } from "@layouts/default/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
