import React from "react";
import "./MessageInput.scss";
import { RiSendPlaneFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

const MessageInput = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    props.onSendMessage(data);
  };
  return (
    <div className="message">
      <form className="message__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("message", { required: true })}
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
