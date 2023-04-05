import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex space-x-1 p-2">
      <FaUserCircle className="text-2xl" />
      <span className="font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
