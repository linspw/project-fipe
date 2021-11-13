import { GlobalStyle } from "@styles/global-style";
import type { AppProps } from "next/app";
import { DefaultLayout } from "@layouts/default/default";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { store } from "../stores/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5d00bf",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
