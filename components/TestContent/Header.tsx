import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, Divider, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import CustomOutlinedBtn from "../Buttons/CustomOutlinedBtn";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { tabs } from "../../files/data";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import Styles from "./TestContent.module.css";
const { RangePicker } = DatePicker;

export default function Header() {
  const buttonStyles = {
    fontSize: "1.2rem",
    width: "150px",
    marginTop: 2,
    padding: 1,
    "&:hover": {
      backgroundColor: "#00690B",
    },
  };

  const tabStyle = {
    minHeight: "40px",
    fontWeight: "bold",
    padding: "0px",
    marginRight: "24px",
  };
  const headTextStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  const headRow = {
    display: {
      xs: "none",
      sm: "flex",
    },
    justifyContent: "space-between",
  };
  const filterStyle = {
    marginTop: "45px",
    justifyContent: "flex-end",
    display: {
      xs: "none",
      sm: "flex",
    },
  };
  const mobileStyling = {
    display: {
      xs: "none",
      sm: "block",
    },
  };
  const filterBtnContent = {
    display: "flex",
  };
  const mobileBtnContainer = {
    display: {
      xs: "flex",
      sm: "none"
    },
    justifyContent: "space-between",
    margin: "10px 0px 10px 0px"
  };

  const [value, setValue] = useState("one");
  const [dates, setDates] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={mobileBtnContainer}>
        <CustomButton
          color="primary"
          size="small"
          variant="contained"
          sx={buttonStyles}
          fullWidth
          type="submit"
        >
          <>
            <Typography>
              <Box sx={{ textTransform: "capitalize" }}>Create Test</Box>
            </Typography>
          </>
        </CustomButton>
        <CustomOutlinedBtn>
          <Box sx={filterBtnContent}>
            <FilterAltIcon style={{ fill: "gray" }} />
            Filter
          </Box>
        </CustomOutlinedBtn>
      </Box>
      <Box sx={mobileBtnContainer}>
        <Typography sx={headTextStyle}>Tests</Typography>
      </Box>
      <Box sx={mobileBtnContainer}>
        <Typography sx={{ color: "black", paddingLeft: "10px" }}>All tests</Typography>
        <Typography color="primary" sx={{paddingRight: "10px"}}>See All</Typography>
      </Box>
      <Box sx={headRow}>
        <Typography sx={headTextStyle}>Tests</Typography>
        <CustomButton
          color="primary"
          size="small"
          variant="contained"
          sx={buttonStyles}
          fullWidth={true}
          type="submit"
        >
          <>
            <AddIcon />
            <Typography>
              <Box sx={{ textTransform: "capitalize" }}>Add team</Box>
            </Typography>
          </>
        </CustomButton>
      </Box>
      <Box sx={mobileStyling}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="All tests" sx={tabStyle} />
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                icon={<tab.img />}
                iconPosition="start"
                label={tab.name}
                sx={tabStyle}
              />
            );
          })}
        </Tabs>
      </Box>
      <Divider sx={mobileStyling} />
      <Box sx={filterStyle}>
        <Box sx={mobileStyling}>
          <RangePicker
            onChange={(values: any) => {
              setDates(
                values?.map((item: string) => {
                  return moment(item).format("YYYY-DD-MM");
                })
              );
            }}
          />
        </Box>
        <div className={Styles.inpFilterContainer}>
          <input placeholder="Filter" />
          <div className={Styles.filterIcon}>
            <FilterAltIcon style={{ fill: "gray" }} />
          </div>
        </div>
      </Box>
    </Box>
  );
}
