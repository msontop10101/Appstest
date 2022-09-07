import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import GreenBtn from "../General/GreenBtn";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  const header = {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "20px",
    paddingTop:"80px"
  };
  const btnStyle = {
    display: "flex",
  };
  const headerText = {
    fontSize: "large",
    fontWeight: "bold",
  };
  return (
    <>
      <Box sx={{position: "fixed", width:"80%", top:"10px", backgroundColor:"white", zIndex:1}}>
        <Box sx={header}>
          <Typography sx={headerText}>Teams</Typography>
          <Box sx={{marginRight:"5%"}}>
          <GreenBtn>
            <Box sx={btnStyle}>
              <AddIcon />
              <Typography>Add team</Typography>
            </Box>
          </GreenBtn>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default Header;
