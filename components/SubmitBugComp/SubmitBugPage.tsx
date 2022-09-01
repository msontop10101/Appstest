import React from "react";
import { testFeatures, bugTypes} from "../../files/data";
import RadioGroup from "./RadioGroup"
import Steps from "./Steps"
import {
  Box,
  Typography,
  Divider,
  MenuList,
  MenuItem,
} from "@mui/material";
import CustomOptionsDropDown from "../General/CustomOptionsDropDown";

const SubmitBugPage = () => {
  const header = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const subHeader = {
    margin: "10px 0px 5px 0px",
  };

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
          <RadioGroup/>
        </Box>
        <Box>
            <Typography>Steps</Typography>
            <Steps/>
        </Box>
      </Box>
    </>
  );
};

export default SubmitBugPage;
