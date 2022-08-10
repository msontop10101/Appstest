import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomButton from "../CustomButton/CustomButton";
import CustomOutlinedBtn from "../Buttons/CustomOutlinedBtn";
import Box from "@mui/material/Box";

const DashCard = () => {
  const buttonStyles = {
    fontSize: "1.2rem",
    width: {
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
  return (
    <Card sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          We are pleased to show you the key functionalities of AppsTest. This
          tour take you about 5 minutes - you will be a pro in no time
        </Typography>
      </CardContent>
      <CardActions>
        <CustomOutlinedBtn>
          <Typography sx={{ fontSize: "1.1rem" }}>
            <Box sx={{ textTransform: "capitalize" }}>
              Take our product tour
            </Box>
          </Typography>
        </CustomOutlinedBtn>
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
      </CardActions>
    </Card>
  );
};

export default DashCard;
