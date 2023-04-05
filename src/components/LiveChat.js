import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Sherin",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(10),
        })
      );
    }, 100000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((m, index) => {
            return (
              <ChatMessage key={index} name={m.name} message={m.message} />
            );
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full p-2 ml-2 mt-2 border border-black rounded"
      >
        <input
          className="bg-gray-50 border border-gray-300 w-72 px-2 rounded outline-none"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />{" "}
        <button className="px-4 ml-3 border rounded bg-purple-400 font-semibold">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
