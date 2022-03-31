import React from "react";
import rsLogo from "../../img/rs-logo.png";
import { FiMail } from "react-icons/fi";
import { RiGlobalLine, RiFacebookFill } from "react-icons/ri";
import "./CompanyInfo.scss";

const CompanyInfo = () => {
  return (
    <div className="company">
      <div className="company__img">
        <img src={rsLogo} alt="rs-logo" />
      </div>
      <div className="company__info">
        <h2 className="company__name">About our company</h2>
        <p className="company__description">
          Rising Stars - a home where young and enthusiastic engineers gather
          and work in Da Nang, Vietnam.
        </p>
        <ul>
          <li>
            <span className="address-icon">
              <FiMail />
            </span>
            recruiter@rising-stars.vn
          </li>
          <li>
            <span className="address-icon">
              <RiGlobalLine />
            </span>
            <a href="#">www.rising-stars.vn/</a>
          </li>
          <li>
            <span className="address-icon">
              <RiFacebookFill />
            </span>
            <a href="#">www.facebook.com/risingstarsvietnam/</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
