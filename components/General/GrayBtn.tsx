import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./GrayBtn.module.css";

type Props = {
  children: React.ReactNode;
};

function GrayBtn({ children }: Props) {
  return (
    <div>
      <Button className={styles.btnColor}>
        <Typography className={styles.text}>{children}</Typography>
      </Button>
    </div>
  );
}

export default GrayBtn;
