import React, { useEffect, useState } from "react";
import avatar from "../../img/avatar.jpg";
import "./MessageList.scss";

const MessageList = (props) => {
  const [messageList, setMessageList] = useState(props.messageList);

  useEffect(() => {
    setMessageList(props.messageList);
  }, [props.messageList]);

  return (
    <ul className="message-list">
      {console.log(messageList)}
      {messageList.map((message, index) => {
        return (
          <li
            key={index}
            className={`message-list__item ${message.isClient ? "client" : ""}`}
          >
            <div
              className={`message-list__item-avatar ${
                message.isClient ? "client" : ""
              }`}
            >
              <img src={avatar} alt="" />
            </div>
            <p
              className={`message-list__text ${
                message.isClient ? "client" : ""
              }`}
            >
              {message.message}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default MessageList;
