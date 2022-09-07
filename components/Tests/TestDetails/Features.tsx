import React, { useState } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

const Features = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen(true);
  };
  const handleCloseClick = () => {
    setOpen(false)
  }

  const openColor = (openState: boolean) => {
    switch (openState) {
      case true:
        return "#F3F3F3";
        break;
    }
  };
  const brStyles = {
    removeBr: {
      border: open && "none",
      padding: open && "10px 10px 0px 10px",
    },
  };
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
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#00690B",
      color: "white",
    },
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
  const boxStyle = {
    borderRadius: "5px",
  };
  const contextLight = {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    marginLeft: "10px",
    marginBottom: "10px",
    marginTop: "10px",
  };
  const contextHeader = {
    fontWeight: "bold",
    marginLeft: "10px",
  };
  const showDivider = {
    displayDivider: {
      display: open ? "block" : "none",
    },
  };
  const btnOnOpen = {
    rmOnOpen: {
      display: open && "none",
    },
  };

  return (
    <>
      <Box sx={boxStyle} style={{ backgroundColor: openColor(open) }}>
        <Box sx={headSection} style={brStyles.removeBr}>
          <Typography sx={titleText}>{props.title}</Typography>
          <Box sx={rightSide}>
            {open ? (
              <KeyboardArrowUpIcon sx={iconStyle} onClick={handleCloseClick} />
            ) : (
              <KeyboardArrowDownIcon sx={iconStyle} onClick={handleOpenClick} />
            )}
            <Button
              variant="outlined"
              sx={submitBtn}
              style={btnOnOpen.rmOnOpen}
            >
              <Box>
                <Typography sx={submitText}>Submit bug</Typography>
              </Box>
            </Button>
          </Box>
        </Box>
        <Divider
          sx={{ marginBottom: "10px" }}
          style={showDivider.displayDivider}
        />
        {open && (
          <Box>
            <Box>
              <Typography sx={contextHeader}>
                WHERE YOU CAN FIND THIS FEATURE:{" "}
              </Typography>
              <Typography sx={contextLight}>{props.location}</Typography>
            </Box>
            <Box>
              <Typography sx={contextHeader}>
                WHAT YOU SHOULD FIND THERE/TEST FOR:{" "}
              </Typography>
              <Typography sx={contextLight}>{props.whatToTest}</Typography>
              <Typography sx={contextHeader}>Expected behaviour: </Typography>
              <Typography sx={contextLight}>{props.expected}</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Features;
