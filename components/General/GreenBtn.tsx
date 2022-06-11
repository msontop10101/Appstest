import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./GreenBtn.module.css";

type Props = {
  children: React.ReactNode;
};

function GreenBtn({ children }: Props) {
  return (
    <div>
      <Button variant="contained" color="success">
        <Typography className={styles.text}>{children}</Typography>
      </Button>
    </div>
  );
}

export default GreenBtn;
