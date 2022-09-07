import React, { useState } from "react";
import { Box, Typography, Avatar, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Steps = () => {
  const [val, setVal] = useState<any[]>([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (e: any, index: number) => {};
  const handleDelete = (index: number) => {
    const deleteVal = [...val];
    deleteVal.splice(index, 1);
    setVal(deleteVal);
  };

  const boxHeader = {
    border: "1px solid gray",
    borderRadius: "5px",
    width: "95%",
  };
  const boxHeaderTitle = {
    color: "#00000082",
    fontStyle: "italic",
    padding: "10px",
  };
  const createStepsHeader = {};
  const headerContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  };
  const stepContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  };
  const avatarStyle = {
    backgroundColor: "white",
    border: "1px solid green",
    color: "green",
    width: 30,
    height: 30,
  };
  const deleteStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  };
  const addIconAvatar = {
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      border: "1px solid green",
      color: "green"
    }
  }
  const inputStyle = {
    width: "90%",
    padding: "14px",
    border: "1px solid gray",
    borderRadius: "5px",
}

  return (
    <>
      <Box sx={createStepsHeader} id="container">
        <Box sx={headerContainer}>
          <Box>
          <Avatar sx={addIconAvatar}><AddIcon id="addIcon" onClick={() => handleAdd()} /></Avatar>
          </Box>
          <Box sx={boxHeader}>
            <Typography sx={boxHeaderTitle}>Add a step</Typography>
          </Box>
        </Box>
        {val.map((data, index) => {
          return (
            <Box sx={stepContainer} key={index}>
              <Box><Avatar sx={avatarStyle}>{index + 1}</Avatar></Box>
              <input 
                style = {inputStyle}
                onChange={(e) => handleChange(e, index)}
              />
              <Box><Avatar variant="square" sx={deleteStyle}>
                <DeleteForeverOutlinedIcon
                  onClick={() => handleDelete(index)}
                />
              </Avatar></Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Steps;
