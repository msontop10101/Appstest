import React from "react";
import { Box, Typography, MenuList, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import MultiLineTextField from "../../General/MultiLineTextField";
import CustomOptionsDropDown from "../../General/CustomOptionsDropDown";
import { deviceVersions } from "../../../files/data";

const OtherFields = () => {
  const attrachmentField = {
    border: "2px dashed green",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "5px",
    color: "green",
    textDecoration: "underline",
  };
  const uploadLink = {
    color: "green",
    cursor: "pointer",
  };
  return (
    <>
      <Box>
        <Typography>Expected Result</Typography>
        <MultiLineTextField />
      </Box>
      <Box>
        <Typography>Actual Result</Typography>
        <MultiLineTextField />
      </Box>
      <Box>
        <Typography>Upload Attachment</Typography>
        <Box sx={attrachmentField}>
          <AddIcon />
          <Typography sx={uploadLink}>Add attrachment</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Minimum Version</Typography>
        <CustomOptionsDropDown>
            <Box>
            {deviceVersions.map((versions, index) => {
                  return (
                    <MenuList key={index}>
                      <MenuItem>{versions.version}</MenuItem>
                    </MenuList>
                  );
                })}
            </Box>
        </CustomOptionsDropDown>
      </Box>
      <Box>
        <Typography>Additional Comment</Typography>
        <MultiLineTextField />
      </Box>
    </>
  );
};

export default OtherFields;
