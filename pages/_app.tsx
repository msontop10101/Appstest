import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { appThemes } from "../appThemes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appThemes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
