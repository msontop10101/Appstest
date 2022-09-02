import React from "react";
import { Typography, Box } from "@mui/material";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";

const SideInfo = (props: any) => {
  const hStyle = {
    fontWeight: "bold",
  }
  const result = {
    fontSize: "14px",
    border: "1px solid gray",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
  };
  const secContainer = {
    paddingLeft: "10px",
  };
  return (
    <>
      <Box>
        <Box>
          {/* {props.heading} */}
          <AdbOutlinedIcon />
        </Box>
        <Box sx={secContainer}>
          <Box>
            <Typography sx={hStyle}>WHERE YOU CAN FIND THESE FEATURE:</Typography>
            <Typography sx={result}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium iste, nemo numquam laudantium provident illo est sed
              tempora,{" "}
            </Typography>
          </Box>
          <Box>
            <Typography sx={hStyle}>WHAT YOU SHOULD FIND THERE/TEST FOR: </Typography>
            <Typography sx={result}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              cumque, recusandae placeat illo quas natus debitis. Nemo, quam
              temporibus, quos, molestiae rem perferendis vero dicta sit ea
              officia nobis laboriosam!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SideInfo;
