import React from "react";
import styles from "./RaForm.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import lock from "../../Assets/Images/ServiceSider/Emoji.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RaForm() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        <p>Request Access</p>
        <Image src={lock} alt="lock" />
        <div>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <label>Work Email</label>
            <TextField
              fullWidth
              size="small"
              color="success"
              label="Enter your work email address"
              id="fullWidth"
            />
          </Box>
          <Checkbox {...label} />
        </div>
      </div>
    </>
  );
}

export default RaForm;
