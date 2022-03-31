import React from "react";
import avatar from "../../img/avatar.jpg";
import {
  HiOutlineMail,
  HiPhone,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import { GiSupersonicArrow, GiBookmarklet } from "react-icons/gi";
import { FaUniversity, FaToolbox } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import "./UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="user-info">
      <h2>Your Info</h2>
      <div className="user-info__avatar">
        <img src={avatar} alt="" />
      </div>
      <h3 className="user-info__name">Khanh Huynh Nhat</h3>
      <p className="user-info__position">Apply to: Fresher Front-End</p>
      <ul className="user-info__detail">
        <li>
          <HiOutlineMail />
          <span>Email: khanhhuynh3724@gmail.com</span>
        </li>
        <li>
          <HiPhone />
          <span>Number: 0123456789</span>
        </li>
        <li>
          <GiSupersonicArrow />
          <span>Skill: Yasuo tt 7</span>
        </li>
        <li>
          <MdAutoGraph />
          <span>Total experience: 8 year</span>
        </li>
        <li>
          <FaUniversity />
          <span>College name: University Name</span>
        </li>
        <li>
          <GiBookmarklet />
          <span>Degree: University</span>
        </li>
        <li>
          <HiOutlineClipboardCheck />
          <span>Designation: Front end</span>
        </li>
        <li>
          <FaToolbox />
          <span>Company names: Rising stars</span>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
