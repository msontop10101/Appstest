import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
