import React, { useEffect, useState } from "react";
import avatar from "../../img/avatar.jpg";
import "./MessageList.scss";

const messages = [
  {
    message:
      "First Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    isClient: false,
  },
  {
    message: "Lorem ipsum dolor sit amet, ipsum dolor sit amet",
    isClient: true,
  },
  {
    message: "Lorem ipsum dolor sit amet",
    isClient: false,
  },
  {
    message:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    isClient: true,
  },
  {
    message: "Lorem ipsum dolor sit amet",
    isClient: false,
  },
  {
    message: "Lorem ipsum dolor sit amet",
    isClient: true,
  },
];

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
