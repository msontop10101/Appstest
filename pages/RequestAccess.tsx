import React from "react";
import GreenServiceSection from "../components/General/GreenServiceSection";
import IconsList from "../components/General/IconsList";
import MFormHeader from "../components/General/MFormHeader";
import RaForm from "../components/General/RaForm";
import Styles from "./RequestAccess.module.css";

function RequestAccess() {
  return (
    <>
      <div className={Styles.sectionContainer}>
        <div className={Styles.mHeader}>
          <MFormHeader />
        </div>
        <div className={Styles.serviceSection}>
          <GreenServiceSection />
        </div>
        <div className={Styles.formSection}>
          <RaForm />
        </div>
      </div>
    </>
  );
}

export default RequestAccess;
