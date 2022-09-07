import React from "react";
import AvTestsList from "../AvailableTestsList/AvailableTestsList";
import DashDrawer from "../../Dashboard/DashboardDrawer/DashboardDrawer";

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
