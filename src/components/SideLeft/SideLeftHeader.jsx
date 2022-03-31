import React from "react";

import { AiTwotoneHome } from "react-icons/ai";
import "./SideLeftHeader.scss";

const SideLeftHeader = () => {
  return (
    <div className="header">
      <h1 className="header__title">Genesis</h1>
      <a href="https://www.facebook.com/risingstarsvietnam" target="_blank">
        <div className="header__home">
          <AiTwotoneHome />
        </div>
      </a>
    </div>
  );
};

export default SideLeftHeader;
