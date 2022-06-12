import React from "react";
import styles from "./RaForm.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMessage } from "@fortawesome/free-solid-svg-icons";
import lock from "../../Assets/Images/ServiceSider/Emoji.png";
import pimg from "../../Assets/Images/RAform/Message.png";
import { TextField, Checkbox, Box } from "@mui/material";
import GreenBtn from "./GreenBtn";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RaForm() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div>
          <div>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </div>
          <div className={styles.sectionHeader}>
            <p>Request Access</p>
            <Image width={15} height={20} src={lock} alt="lock" />
          </div>
          <form>
            <div>
              <div className={styles.inputSection}>
                <Box sx={{}}>
                  <div className={styles.label}>
                    <label>Work Email</label>
                  </div>
                  <div className={styles.textFieldContent}>
                    <div className={styles.placeholderImg}>
                      <Image src={pimg} alt="message" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your work email address"
                      className={styles.inputs}
                    />
                  </div>
                </Box>
              </div>
              <div className={styles.checkBoxSection}>
                <div className={styles.inputField}>
                  <Checkbox {...label} className={styles.checkBox} />
                  <p>I have read and I accept the Terms of use</p>
                </div>
                <div className={styles.inputField}>
                  <Checkbox {...label} className={styles.checkBox} />
                  <p>
                    Send me occasional emails about Appstest&apos;s services
                    (unsubscribe at any time)
                  </p>
                </div>
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
