import React from "react";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TableComp } from "./TableComp";
import MobileTestList from "./MobileTestsList";
import {Box} from "@mui/material"

const TestContent = () => {
  const mobileView = {
    display: {
      xs: "none",
      sm: "block"
    }
  }
  const largeView = {
    display: {
      sm: "none",
      xs: "block"
    }
  }
  const queryClient = new QueryClient();
  return (
    <div>
      <Header />
      <Box sx={mobileView}>
      <QueryClientProvider client={queryClient}>
        <TableComp />
      </QueryClientProvider>
      </Box>
      <Box sx={largeView}>
      <QueryClientProvider client={queryClient}>
        <MobileTestList />
      </QueryClientProvider>
      </Box>
    </div>
  );
};

export default TestContent;
