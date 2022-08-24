import React from "react";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TableComp } from "./TableComp";

const TestContent = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>
        <TableComp />
      </QueryClientProvider>
    </div>
  );
};

export default TestContent;
