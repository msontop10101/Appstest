import React from "react";
import AvTestsList from "../AvTestsList/AvTestsList";
import DashDrawer from "../DashDrawer/DashDrawer";

const AvTestsComp = () => {
  return (
    <>
      <DashDrawer>
        <AvTestsList />
      </DashDrawer>
    </>
  );
};

export default AvTestsComp;
