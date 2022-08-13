import React from "react";
import Styles from "./AndroidStepOne.module.css";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { Typography, Grid, Avatar } from "@mui/material";
import { dSelectAndLink } from "../../../files/data";
import Image from "next/image";

const AndroidStepOne = () => {
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
            <Grid container spacing={2}>
              {dSelectAndLink.map((contents, index) => {
                const { name, img, link } = contents;
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={6} sm={3} sx={iGridStyle}>
                      <Avatar variant="square" sx={avatarStyle}>
                        <Image src={img} alt={name} />
                      </Avatar>
                      <Typography sx={modalImageLabelStyle}>{name}</Typography>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidStepOne;
