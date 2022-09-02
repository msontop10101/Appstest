import React from "react";
import { testFeatures, bugTypes } from "../../files/data";
import RadioGroup from "./RadioGroup";
import Steps from "./Steps";
import {
  Box,
  Typography,
  Divider,
  MenuList,
  MenuItem,
  Button,
} from "@mui/material";
import CustomOptionsDropDown from "../General/CustomOptionsDropDown";
import SideInfo from "./SideInfo"
import OtherFields from "./OtherFields";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const SubmitBugPage = () => {
  const header = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const subHeader = {
    margin: "10px 0px 5px 0px",
  };
  const bottomActions = {
    backgroundColor: "green",
    minHeight: "20px",
    width: "100%",
    position: "fixed",
    bottom: "0px",
    padding: "10px",
  };
  const actionBtnStyle = {
    display: "flex",
    alignItems: "center",
  };
  const submitBtn = {
    backgroundColor: "white",
    color:"green",
    mr: 1,
    "&:hover": {
      backgroundColor:"white",
    }
  }
  const cancelBtn = {
    color: "white",
    borderColor: "white",
  }

  return (
    <>
      <Box>
        <Box>
          <Typography sx={header}>Submit Bug</Typography>
          <Divider />
        </Box>
        <Box>
          <Box>
            <Typography sx={subHeader}>Feature</Typography>
            <CustomOptionsDropDown>
              <Box>
                {testFeatures.map((feature, index) => {
                  return (
                    <MenuList key={index}>
                      <MenuItem>{feature.title}</MenuItem>
                    </MenuList>
                  );
                })}
              </Box>
            </CustomOptionsDropDown>
          </Box>
          <Box>
            <Typography sx={subHeader}>Bug Type</Typography>
            <CustomOptionsDropDown>
              <Box>
                <MenuList>
                  {bugTypes.map((bugType, index) => {
                    return <MenuItem key={index}>{bugType.type}</MenuItem>;
                  })}
                </MenuList>
              </Box>
            </CustomOptionsDropDown>
          </Box>
        </Box>
        <Box>
          <Typography>Severity</Typography>
          <RadioGroup />
        </Box>
        <Box>
          <Typography>Steps</Typography>
          <Steps />
        </Box>
        <Box>
          <OtherFields />
        </Box>
        <Box sx={bottomActions}>
          <Box>
            <Button variant="contained" sx={submitBtn}>
              <Box sx={actionBtnStyle}>
                <CheckIcon />
                <Typography sx={{textTransform: "capitalize"}}>Submit</Typography>
              </Box>
            </Button>
            <Button variant="outlined" style={cancelBtn}>
              <Box sx={actionBtnStyle}>
                <ClearIcon />
                <Typography sx={{textTransform: "capitalize"}}>Cancel</Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <SideInfo/>
      </Box>
    </>
  );
};

export default SubmitBugPage;
