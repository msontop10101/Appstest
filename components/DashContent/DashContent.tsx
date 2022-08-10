import React from "react";
import DashCard from "../DashCard/DashCard";
import Typography from "@mui/material/Typography";
import Styles from "./DashContent.module.css";
import DashCards from "../DashCards/DashCards";
import SideCards from "../DashCards/SideCards";
import { steps, hr } from "../../files/data";

const DashContent = () => {
  const header = {
    fontSize: "1.4rem",
    fontWeight: "bold",
    margin: "5px 0px 25px 0px",
  };
  const dashInfo = {
    fontSize: 15,
    marginBottom: "25px",
  };
  const subHeading = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "25px 0px 25px 0px",
  };
  return (
    <>
      <div>
        <div className={Styles.hInfo}>
          <Typography sx={header}>Welcome to AppsTest!</Typography>
          <Typography sx={dashInfo}>
            We are a platform of software testers. Take your time to learn about
            our platform and our rules - you don&apos;t have to rush anything
          </Typography>
        </div>
        <DashCard />
        <div>
          <Typography sx={subHeading}>Onboarding Steps</Typography>
          <DashCards steps={steps} />
          <Typography sx={subHeading}>Help & Resources</Typography>
          <div>
            {hr.map((info, index) => {
              return (
                <div key={index}>
                  <SideCards />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashContent;
