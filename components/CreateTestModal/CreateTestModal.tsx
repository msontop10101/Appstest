import * as React from "react";
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
import { dSelectAndLink } from "../../files/data";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: {
    xs: "100%",
    sm: "35%",
  },
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const CreateTestModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Typography>Create a new test</Typography>
            </div>
            <div className={Styles.closeBtn}>
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
          <Divider />
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
                <Stack direction="row" spacing={2}>
                  {dSelectAndLink.map((contents, index) => {
                    const { name, img, link } = contents;
                    return (
                      <div key={index}>
                        <div>
                          <Avatar variant="square" sx={avatarStyle}>
                            <Image src={img} alt={name} />
                          </Avatar>
                          <Typography sx={modalImageLabelStyle}>
                            {name}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </Stack>
              </div>
            </div>
          </div>
          <div className={Styles.mNavBtns}>
            <div>
              <GrayBtn>Back</GrayBtn>
            </div>
            <div>
              <GreenBtn>Next</GreenBtn>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTestModal;
