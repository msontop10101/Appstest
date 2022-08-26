import React, {useState} from "react";
import Header from "./Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TableComp } from "./TableComp";
import MobileTestList from "./MobileTestsList";
import {Box} from "@mui/material"

export const selectedTabContext = React.createContext('')

const TestContent = () => {
  const [tabValue, setTabValue] = useState("")
  const getValue = (val:any) => {
    setTabValue(val)
  }
  
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
      <Header getValue={getValue}/>
      <Box sx={mobileView}>
      <selectedTabContext.Provider value={tabValue}>
      <QueryClientProvider client={queryClient}>
        <TableComp />
      </QueryClientProvider>
      </selectedTabContext.Provider>
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
