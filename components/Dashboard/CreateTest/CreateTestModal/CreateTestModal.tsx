import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomButton from "../../../General/CustomButton/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import GrayBtn from "../../../General/GrayBtn";
import GreenBtn from "../../../General/GreenBtn";
import ProgressBar from "../ProgressBar/ProgressBar";
import ChooseOs from "../ModalPages/ChooseOs";
import AndroidStepOne from "../ModalPages/AndroidStepOne";
import OsStepThree from "../ModalPages/OsStepThree";
import StepFour from "../ModalPages/StepFour";

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
    step > 0 && setMove((prevState:any) => prevState - 25);
    console.log(step);
    console.log(move);
  };
  const handleNextButton = () => {
    step < 3 && setStep(step + 1);
    step < 3 && setMove((prevState:any) => prevState + 25);
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
  const modalHeader = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
}
const closeBtn = {
    cursor: "pointer", 
}
const modalContents = {
    margin:" 15px 0px 10px 0px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
}

const progressBarPosition = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px 0px 10px 0px",
}

const os = {
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
}

const dSelectStyle = {
    display: "flex",
    flexDirection: "column",
}
const mNavBtns = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0px 10px 0px",
}

  return (
    <Box>
      <Box onClick={handleOpen}>
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
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={modalHeader}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Create a new test
              </Typography>
            </Box>
            <Box sx={closeBtn}>
              <CloseIcon onClick={handleClose} />
            </Box>
          </Box>
          <Divider />

          <Box sx={modalContents}>
            <Box>
              <Box sx={progressBarPosition}>
                <ProgressBar move={move} step={step} />
              </Box>
              <Box>
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
                ) : step == 3 ? (
                  <navContext.Provider value={nav}>
                    <StepFour />
                  </navContext.Provider>
                ) : null}
              </Box>
            </Box>
          </Box>
          <Box sx={mNavBtns} id="mNavBtns">
            <Box onClick={handleBackButton}>
              <GrayBtn>Back</GrayBtn>
            </Box>
            {step == 3 ? (
              <Box onClick={handleNextButton}>
                <GreenBtn>Submit</GreenBtn>
              </Box>
            ) : (
              <Box onClick={handleNextButton}>
                <GreenBtn>Next</GreenBtn>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateTestModal;
