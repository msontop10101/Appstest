import React from "react";
import {Box} from "@mui/material"

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const layoutSection = {
    padding: "30px",
}
  return (
    <>
      <Box sx={layoutSection} >{children}</Box>
    </>
  );
}

export default Layout;
