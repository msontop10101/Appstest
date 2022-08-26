import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getTests } from "../Api/api";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const MobileTestList = () => {
  const query = useQuery(["Tests"], getTests);
  const tableData = query.data;
  const cardStyle = {
    margin: "20px 0px 20px 0px",
    maxWidth: 345,
  };
  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const cellBoxStyle = {
    display: "flex",
    textAlign: "center",
  };
  const leftSide = {
    display: "flex",
  };
  const rightSide = {
    textAlign: "left",
    width: "35%"
  }
  const typeStyle = {
    marginRight: "10px",
  };
  const descStyle = {
    fontSize: "14px",
    color: "gray"
  }
  return (
    <>
      <Box>
        {tableData?.map((data, index) => {
          const { type, name, desc, enviroment, status } = data;
          return (
            <Card sx={cardStyle} key={index}>
              <CardContent sx={contentStyle}>
                <Box sx={leftSide}>
                  <Box sx={typeStyle}>
                    {type == "Android" ? (
                      <AdbIcon />
                    ) : type == "IOS" ? (
                      <AppleIcon />
                    ) : type == "Web" ? (
                      <LanguageIcon />
                    ) : (
                      type
                    )}
                  </Box>
                  <Box>
                    <Typography>{name}</Typography>
                    <Typography sx={descStyle}>{desc}</Typography>
                  </Box>
                </Box>
                <Box sx={rightSide}>
                  <Typography>{enviroment}</Typography>
                    {status == "Pending" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon style={{ fill: "#EC8A00" }} />
                        <Typography sx={{ color: "#EC8A00", fontSize: "14px", textAlign: "left"}}>
                          Pending
                        </Typography>
                      </Box>
                    ) : status == "Inprogress" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon style={{ fill: "#0067DC" }} />
                        <Typography sx={{ color: "#0067DC", fontSize: "14px", textAlign: "left"}}>
                          In Progress
                        </Typography>
                      </Box>
                    ) : status == "Completed" ? (
                      <Box sx={cellBoxStyle}>
                        <FiberManualRecordIcon color="primary" />
                        <Typography color="primary" sx={{fontSize: "14px", textAlign: "left"}}>Completed</Typography>
                      </Box>
                    ) : (
                      status
                    )}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default MobileTestList;
