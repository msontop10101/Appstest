import React from "react";
import Styles from "./RequestAccessComp.module.css";
import RaForm from "../RAForm/RaForm";
import ServiceSection from "../ServiceSection/ServiceSection";
import MobileBa from "../MobileBackground/MobileBa";

function RequestAccessComp() {
  return (
    <>
      <div className={Styles.container}>
        <ServiceSection />
        <RaForm />
      </div>
      <div className={Styles.mcontainer}>
        <MobileBa>
          <RaForm />
        </MobileBa>
      </div>
    </>
  );
}

export default RequestAccessComp;
