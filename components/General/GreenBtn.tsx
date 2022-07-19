import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./GreenBtn.module.css";

type Props = {
  children: React.ReactNode;
};

function GreenBtn({ children }: Props) {
  const btnStyle = {
    backgroundColor: "#00690B",
    color: "white",
    border: 1,
    borderColor: "#00690B",
    "&: hover": {
      backgroundColor: "transparent",
      borderColor: "#00690B",
      color: "#00690B",
    },
  };
  return (
    <div>
      <Button sx={btnStyle}>
        <Typography className={styles.text}>{children}</Typography>
      </Button>
    </div>
  );
}

export default GreenBtn;
