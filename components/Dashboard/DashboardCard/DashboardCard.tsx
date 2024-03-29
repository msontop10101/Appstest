import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CreateTestModal from "../CreateTest/CreateTestModal/CreateTestModal";
import CustomOutlinedBtn from "../../General/Buttons/CustomOutlinedButton";
import Box from "@mui/material/Box";
import Styles from "./DashboardCard.module.css";

const DashCard = () => {
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
  const OutlinedBtnStyles = {
    fontSize: "1.2rem",
  };
  const cardStyles = {
    padding: 2,
    marginRight: {
      xs: "0px",
      sm: "15px",
    },
    textAlign: {
      xs: "center",
      sm: "left",
    },
  };
  const CardActionsStyle = {
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "flex-start",
    },
  };
  const groupBtns = {
    display: "flex",
    flexDirection: {
      sm: "row",
      xs: "column"
    }
}
const groupBtnsContainer = {
  display: {
    sm: "block",
    xs: "flex"
  },
  justifyContent: "center",
}

  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          We are pleased to show you the key functionalities of AppsTest. This
          tour take you about 5 minutes - you will be a pro in no time
        </Typography>
      </CardContent>
      <CardActions sx={CardActionsStyle}>
        <Box sx={groupBtns}>
          <Box>
            <CustomOutlinedBtn>
              <Typography sx={{ fontSize: "1.1rem" }}>
                <Box sx={{ textTransform: "capitalize" }}>
                  Take our product tour
                </Box>
              </Typography>
            </CustomOutlinedBtn>
          </Box>
          <Box>
            <CreateTestModal />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default DashCard;
