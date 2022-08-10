import React from "react";
import DashCard from "../DashCard/DashCard";
import Typography from "@mui/material/Typography";
import Styles from "./DashContent.module.css";
import DashCards from "../DashCards/DashCards";
import { steps, hr } from "../../files/data";
import SideCards from "../DashCards/SideCards";

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
  const subHeading1 = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "25px 0px 25px 0px",
  };
  const subHeading2 = {
    fontWeight: "bold",
    margin: "-25px 0px 5px 0px",
  };
  return (
    <>
      <div className={Styles.hInfo}>
        <Typography sx={header}>Welcome to AppsTest!</Typography>
        <Typography sx={dashInfo}>
          We are a platform of software testers. Take your time to learn about
          our platform and our rules - you don&apos;t have to rush anything
        </Typography>
      </div>
      <div className={Styles.container}>
        <div className={Styles.rightSide}>
          <div>
            <DashCard />
            <div>
              <Typography sx={subHeading1}>Onboarding Steps</Typography>
              <DashCards steps={steps} />
            </div>
          </div>
        </div>
        <div className={Styles.leftSide}>
          <div>
            <Typography sx={subHeading2}>Help & Resources</Typography>
            <div className={Styles.side}>
              <SideCards
                bgColor="rgba(0, 105, 11, 0.1)"
                headtext={hr[0].head}
                bodytext={hr[0].body}
                button={hr[0].button}
              />
            </div>
            <div className={Styles.side}>
              <SideCards
                bgColor="rgba(239, 68, 68, 0.1)"
                headtext={hr[1].head}
                bodytext={hr[1].body}
                button={hr[1].button}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashContent;
