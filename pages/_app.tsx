import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { appThemes } from "../appThemes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={appThemes}> 
      <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
