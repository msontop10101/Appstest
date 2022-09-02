import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type Props = {
  children: JSX.Element;
};

const CustomOptionsDropDown: React.FC<Props> = ({ children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const btnStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const btnText = {
    textTransform: "capitalize",
  };
  return (
    <>
      <Box>
        <Button
          sx={btnStyle}
          variant="contained"
          fullWidth
          endIcon={<ArrowDropDownIcon />}
          onClick={handleOpen}
        >
          <Typography sx={btnText}>Please select</Typography>
        </Button>
        {open && <Box onClick={handleOpen}>{children}</Box>}
      </Box>
    </>
  );
};

export default CustomOptionsDropDown;
