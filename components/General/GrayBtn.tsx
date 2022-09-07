import React from "react";
import { Button, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const GrayBtn = ({ children }: Props) => { 
  const text = {
    fontWeight: "500",
    fontFamily: "DM sans",
    padding: "5px 10px 5px 10px",
    textTransform: "capitalize",
}

  const btnStyles = {
    backgroundColor: "#EEEEEE",
    border: 1,
    borderColor: "#EEEEEE",
    color: "black",
    "&: hover": {
      backgroundColor: "black",
      color: "#ffffff",
    },
  };
  return (
    <div>
      <Button sx={btnStyles}>
        <Typography sx={text}>{children}</Typography>
      </Button>
    </div>
  );
}

export default GrayBtn;
