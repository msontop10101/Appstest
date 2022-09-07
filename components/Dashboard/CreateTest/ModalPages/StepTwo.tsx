import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Link from "next/link";

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
  const inputField = {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
}
const enterNameContainer = {
    margin : "15px 0px 15px 0px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
}
const uploadContainer = {
    border: "2px dashed green",
    borderRadius: "5px",
    padding: "50px",
    margin: "10px 0px 10px 0px",
}
  return (
    <>
      <Box sx={enterNameContainer}>
        <Typography sx={label}>Name</Typography>
        <input style={inputField} />
      </Box>
      <Box>
        <Typography sx={uploadLabel}>
          Upload test breifs contianing covrage areas
        </Typography>
        <Box sx={uploadContainer}>
          <Link href="#">
            <a>
              <Typography sx={uploadLink}>Click to upload</Typography>
            </a>
          </Link>
          <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
            Supported file formats are: .xls(x) .doc(x) .pdf
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default StepTwo;
