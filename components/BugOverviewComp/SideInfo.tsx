import React from "react";
import { Typography, Box,} from "@mui/material";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";

const SideInfo = (props: any) => {
  const hStyle = {
    fontWeight: "bold",
  }
  const result = {
    fontSize: "14px",
    border: "1px solid gray",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
  };
  const secContainer = {
    // paddingLeft: "10px",
  };
  return (
    <>
      <Box>
        <Box>
          {/* {props.heading} */}
          <AdbOutlinedIcon />
        </Box>
        <Box sx={secContainer}>
         <Typography>status: </Typography>
         <Typography>In review</Typography>
        </Box>
      </Box>
    </>
  );
};

export default SideInfo;
