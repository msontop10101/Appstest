import React from "react";
import { Typography, Grid } from "@mui/material";
import Link from "next/link";
import Styles from "./StepTwo.module.css";

const StepTwo = () => {
  const label = {
    marginBottom: "5px",
  };
  const uploadLabel = {
    textAlign: "left",
    fontWeight: "120px",
  };
  const uploadLink = {
    color: "green",
    textDecoration: "underline",
    fontWeight: "bold",
    marginBottom: "5px",
  };
  return (
    <>
      <div className={Styles.enterNameContainer}>
        <Typography sx={label}>Name</Typography>
        <input className={Styles.inputField} />
      </div>
      <div className={Styles.contentContainer}>
        <Typography sx={uploadLabel}>
          Upload test breifs contianing covrage areas
        </Typography>
        <div className={Styles.uploadContainer}>
          <Link href="#">
            <a>
              <Typography sx={uploadLink}>Click to upload</Typography>
            </a>
          </Link>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Supported file formats are: .xls(x) .doc(x) .pdf
          </Typography>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
