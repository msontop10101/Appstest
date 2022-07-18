import React from "react";
import RqForm from "../RQForm/RqForm";
import ServiceSection from "../ServiceSection/ServiceSection";
import Styles from "./RequestQuoteComp.module.css";
import MobileBa from "../MobileBackground/MobileBa";

function RequestQuoteComp() {
  return (
    <>
      <div className={Styles.container}>
        <ServiceSection />
        <RqForm />
      </div>
      <div className={Styles.mcontainer}>
        <MobileBa>
          <RqForm />
        </MobileBa>
      </div>
    </>
  );
}

export default RequestQuoteComp;
