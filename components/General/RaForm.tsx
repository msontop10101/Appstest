import React from "react";
import styles from "./RaForm.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import lock from "../../Assets/Images/ServiceSider/Emoji.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import GreenBtn from "./GreenBtn";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RaForm() {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </div>
      <div className={styles.sectionContainer}>
        <div>
          <div className={styles.sectionHeader}>
            <p>Request Access</p>
            <div>
              <Image src={lock} alt="lock" />
            </div>
          </div>
          <form>
            <div>
              <Box sx={{}}>
                <label>Work Email</label>
                <TextField
                  fullWidth
                  size="small"
                  color="success"
                  label="Enter your work email address"
                  id="fullWidth"
                />
              </Box>
              <div className={styles.inputField}>
                <Checkbox {...label} />
                <p>I have read and I accept the Terms of use</p>
              </div>
              <div className={styles.inputField}>
                <Checkbox {...label} />
                <p>
                  Send me occasional emails about Appstest&apos;s services
                  (unsubscribe at any time)
                </p>
              </div>
              <GreenBtn>Request Access</GreenBtn>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RaForm;
