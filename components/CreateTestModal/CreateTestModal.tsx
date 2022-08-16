import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomButton from "../CustomButton/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Styles from "./CreateTestModal.module.css";
import GrayBtn from "../General/GrayBtn";
import GreenBtn from "../General/GreenBtn";
import { Grid, Avatar } from "@mui/material";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import { dSelectAndLink } from "../../files/data";
import ChooseOs from "../ModalPages/ChooseOs";
// import AndroidStepOne from "../ModalPages/AndroidModalSteps/AndroidStepOne";
// import AndroidStepTwo from "../ModalPages/AndroidModalSteps/AndroidStepTwo";
// import AndroidStepThree from "../ModalPages/AndroidModalSteps/AndroidStepThree";
// import AndroidStepFour from "../ModalPages/AndroidModalSteps/AndroidStepFour";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: {
    xs: "90%",
    sm: "35%",
  },
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const CreateTestModal = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBackButton = () => {
    step > 0 && setStep(step - 1);
  };
  const handleNextButton = () => {
    step < 4 && setStep(step + 1);
  };

  useEffect(() => {}, []);

  const buttonStyles = {
    fontSize: "1.2rem",
    width: {
      xs: 200,
      sm: 200,
    },
    marginTop: 2,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const headerText = {
    fontWeight: "bold",
  };
  const subHeaderText = {
    fontSize: "14px",
  };
  const avatarStyle = {
    bgcolor: "#EEEEEE",
    borderRadius: "5px",
    width: "100px",
    height: "100px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };
  const modalImageLabelStyle = {
    fontSize: "14px",
    marginTop: "10px",
  };
  const iGridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <CustomButton
          color="primary"
          size="small"
          variant="contained"
          sx={buttonStyles}
          type="submit"
          fullWidth={true}
        >
          <Typography>
            <Box sx={{ textTransform: "capitalize" }}>
              Create your free trial
            </Box>
          </Typography>
        </CustomButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={Styles.modalHeader}>
            <div>
              <Typography sx={{ fontWeight: "bold" }}>
                Create a new test
              </Typography>
            </div>
            <div className={Styles.closeBtn}>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
          <Divider />
          {/* <div>
            {step == 0 ? (
              <AndroidStepOne />
            ) : step == 1 ? (
              <AndroidStepTwo />
            ) : step == 2 ? (
              <AndroidStepThree />
            ) : step == 3 ? (
              <AndroidStepThree />
            ) : (
              step == 4 && <AndroidStepFour />
            )}
          </div> */}
          <div className={Styles.modalContents}>
            <div>
              <div className={Styles.progressBarPosition}>
                <ProgressBar />
              </div>
              <div className={Styles.pageText}>
                <Typography sx={headerText}>
                  Select platform and test application
                </Typography>
                <Typography sx={subHeaderText} color="text.secondary">
                  Please choose the device platform you&apos;ll be testing on
                </Typography>
              </div>
              <div>
                <ChooseOs />
              </div>
            </div>
          </div>
          <div className={Styles.mNavBtns} id="mNavBtns">
            <div onClick={handleBackButton}>
              <GrayBtn>Back</GrayBtn>
            </div>
            <div onClick={handleNextButton}>
              <GreenBtn>Next</GreenBtn>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTestModal;
