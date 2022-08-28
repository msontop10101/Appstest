

import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "background-color"]),

    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CustomizedTextField = () => {
  return (
    <Box component="form" noValidate>
      <FormControl variant="standard">
        <BootstrapInput id="bootstrap-input" />
      </FormControl>
    </Box>
  );
};

export default CustomizedTextField;
