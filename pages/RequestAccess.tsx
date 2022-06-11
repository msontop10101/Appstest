import React from "react";
import GreenServiceSection from "../components/General/GreenServiceSection";
import IconsList from "../components/General/IconsList";
import RaForm from "../components/General/RaForm";

function RequestAccess() {
  return (
    <>
      <div>
        <div>
          <GreenServiceSection />
        </div>
        <div>
          <RaForm />
        </div>
      </div>
    </>
  );
}

export default RequestAccess;
