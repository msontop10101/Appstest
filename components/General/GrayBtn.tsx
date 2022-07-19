import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./GrayBtn.module.css";

type Props = {
  children: React.ReactNode;
};

function GrayBtn({ children }: Props) {
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
        <Typography className={styles.text}>{children}</Typography>
      </Button>
    </div>
  );
}

export default GrayBtn;
