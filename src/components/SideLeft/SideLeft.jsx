import React from "react";

import SideLeftHeader from "./SideLeftHeader";
import CompanyInfo from "./CompanyInfo";
import CommandList from "./CommandList";

import "./SideLeft.scss";

const SideLeft = () => {
  return (
    <div className="side-left">
      <SideLeftHeader />
      <CompanyInfo />
      <CommandList />
    </div>
  );
};

export default SideLeft;
