import React, { useEffect, useState } from "react";
import "./MainChat.scss";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

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

const MainChat = () => {
  const [messageList, setMessageList] = useState(messages);

  const SendMessageHandler = (data) => {
    const message = { message: data.message, isClient: true };
    setMessageList([message, ...messageList]);
  };
  return (
    <div className="main-chat">
      <Header />
      <MessageList messageList={messageList} />
      <MessageInput onSendMessage={SendMessageHandler} />
    </div>
  );
};

export default MainChat;
