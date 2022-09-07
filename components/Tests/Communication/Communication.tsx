import React from "react";
import { communication } from "../../../files/data";
import { Box, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";


import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SideInfo from "../TestDetails/SideInfo";

const Communication = () => {
  const commContainer = {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px",
  };
  const uname = {
    fontWeight: "bold",
  };
  const unameAndMsg = {
    marginLeft: "10px",
  };
  const uMsg = {
    
    minHeight: "20px",
    padding: "5px",
  };
  const chatContainer = {
    width: "100%",
    backgroundColor: "green",
    minHeight: "20px",
    position: "fixed",
    bottom: "0px",
    padding:"5px",
  };
  const msgSec = {
    backgroundColor: "#00800059",
    padding: "7px",
    borderRadius: "5px",
  }
  const msgTime = {
    fontSize: "14px",
    textAlign: "right"
  }
  const chatDisplayContainer = {
    marginBottom: "50px",
    width: '60%'
  }
  const secOneContainer = {
    display: "flex",
    justifyContent: "space-between"
  }
  const sideInfo = {
    marginRight: "10%"
  }
  const headingStyle = {
    backgroundColor: "black",
    color: "white",
    minHeight: "15px",
    padding: "12px",
    borderBottomRightRadius: "5px",


  }
  return (
    <>
      <Box sx={secOneContainer}>
      <Box sx={chatDisplayContainer}>
        {communication.map((chat, index) => {
          const { name, msg, time } = chat;
          return (
            <Box key={index}>
              <Box sx={commContainer}>
                <Avatar>
                  <PersonIcon />
                </Avatar>
                <Box sx={unameAndMsg}>
                  <Typography sx={uname}>{name}</Typography>
                  <Box sx={msgSec}>
                  <Typography sx={uMsg}>{msg}</Typography>
                  <Typography sx={msgTime}>{time}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={sideInfo}>
      <SideInfo
            heading={<Typography sx={headingStyle}>Online Testers</Typography>}
            titleOne={"Online Testers"}
            titleTwo={"Active Testers"}
            titleThree={"Total Testers"}
            one={15}
            two={24}
            three={76}
          />
      </Box>
      </Box>
      <Box sx={chatContainer}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              backgroundColor:"green",
              border: "1px solid white",
            }}
          >
            <IconButton aria-label="menu">
              <SentimentSatisfiedAltIcon style ={{color:"white"}}/>
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Type a message" />
            <IconButton type="button" aria-label="search">
              <AttachmentOutlinedIcon style={{color: 'white'}}/>
            </IconButton>
            <Box sx={{backgroundColor:"white", display: "flex", justifyContent:"center"}}>
            <IconButton
              color="primary"
              sx={{ backgroundColor: "white" }}
              aria-label="directions"
            >
              <SendIcon />
            </IconButton>
            </Box>
          </Paper>
        </Box>
    </>
  );
};

export default Communication;
