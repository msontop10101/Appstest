import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper, Box } from "@mui/material";
import CustomizedTextField from "../General/CustomizedTextField"

const Header = () => {
  const paperStyle = {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    border: "1px solid gray"
  };
  const iBStyle = {
    ml: 1,
    flex: 1,
  };
  const containerStyle = {
    margin: "10px 0px 10px 0px",
    display: "flex",
    justifyContent: "space-between"
  }
  return (
    <>
      <Box sx={containerStyle}>
        <Box>
        <label>Search</label>
        <Paper component="form" sx={paperStyle}>
          <InputBase sx={iBStyle} />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        </Box>
        <Box>
            <label>Filter bug types</label>
            <CustomizedTextField/>
        </Box>
        <Box>
        <label>Features</label>
            <CustomizedTextField/>
        </Box>
        <Box>
        <label>Severity</label>
            <CustomizedTextField/>
        </Box>
      </Box>
    </>
  );
};

export default Header;



