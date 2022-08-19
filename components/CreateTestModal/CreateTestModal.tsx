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
import ProgressBar from "../ProgressBar/ProgressBar";
import ChooseOs from "../ModalPages/ChooseOs";
import AndroidStepOne from "../ModalPages/Android/AndroidStepOne";
import OsStepThree from "../ModalPages/OsStepThree";
import WebStepThree from "../ModalPages/WebStepThree";

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
export const navContext = React.createContext("");

const CreateTestModal = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [nav, setNav] = useState("Android");
  const [move, setMove] = useState(25);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBackButton = () => {
    step > 0 && setStep(step - 1);
    step > 0 && setMove((prevState) => prevState - 25);
    console.log(step);
    console.log(move);
  };
  const handleNextButton = () => {
    step < 3 && setStep(step + 1);
    step < 3 && setMove((prevState) => prevState + 25);
    console.log(step);
    console.log(move);
  };
  const getSelected = (select: string) => {
    setNav(select);
    console.log(nav);
  };

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

          <div className={Styles.modalContents}>
            <div>
              <div className={Styles.progressBarPosition}>
                <ProgressBar move={move} step={step} />
              </div>
              <div>
                {step == 0 ? (
                  <ChooseOs onSelect={getSelected} />
                ) : step == 1 ? (
                  <navContext.Provider value={nav}>
                    <AndroidStepOne />
                  </navContext.Provider>
                ) : step == 2 ? (
                  <navContext.Provider value={nav}>
                    <OsStepThree />
                  </navContext.Provider>
                ) : null}
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
