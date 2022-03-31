import React from "react";
import "./MessageInput.scss";
import { GrSend } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <div className="message">
      <form className="message__form">
        <input
          type="text"
          className="message__input"
          placeholder="Type your message / command here..."
        />
        <button type="submit" className="message__button">
          <RiSendPlaneFill />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
