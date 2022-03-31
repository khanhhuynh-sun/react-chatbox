import React from "react";
import "./MainChat.scss";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const MainChat = () => {
  return (
    <div className="main-chat">
      <Header />
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default MainChat;
