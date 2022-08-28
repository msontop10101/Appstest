import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Features = (props: any) => {
  const [open, setOpen] = useState(false);
  const headSection = {
    border: "1px solid gray",
    margin: "10px 0px 10px 0px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const titleText = {
    paddingLeft: "5px",
  };
  const submitBtn = {
    backgroundColor: "#0080004a",
  };
  const submitText = {
    textTransform: "capitalize",
  };
  const rightSide = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const iconStyle = {
    paddingRight: "5px",
  };

  return (
    <>
      <Box>
        <Box sx={headSection}>
          <Typography sx={titleText}>{props.title}</Typography>
          <Box sx={rightSide}>
            {open ? (
              <KeyboardArrowUpIcon
                sx={iconStyle}
                onClick={() => setOpen(!open)}
              />
            ) : (
              <KeyboardArrowDownIcon
                sx={iconStyle}
                onClick={() => setOpen(!open)}
              />
            )}
            <Button variant="outlined" sx={submitBtn}>
              <Box>
                <Typography sx={submitText}>Submit bug</Typography>
              </Box>
            </Button>
          </Box>
        </Box>
        {open && (
          <Box>
            <Box>
              <Typography>WHERE YOU CAN FIND THIS FEATURE: </Typography>
              <Typography>{props.location}</Typography>
            </Box>
            <Box>
              <Typography>WHAT YOU SHOULD FIND THERE/TEST FOR: </Typography>
              <Typography>{props.whatToTest}</Typography>
              <Typography>Expected behaviour: </Typography>
              <Typography>{props.expected}</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Features;
