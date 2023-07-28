import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../../../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../../../utils/helper";

import { IMG_URL } from "../../../utils/constants";
import Sidebar from "./Sidebar";

const LiveChat = () => {
  const [user, setUser] = useState([]);
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setTimeout(() => {
      getUser();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        addMessage({
          firstName: user?.name?.first,
          lastName: user?.name?.last,
          pic: user?.picture?.thumbnail,
          message: makeRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  });

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response?.json();
    setUser(data?.results[0]);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className=" scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-400 hover:scrollbar-thumb-blue-600 active:scrollbar-thumb-blue-500 mx-auto flex h-[80vh] w-[400px] flex-col-reverse items-start justify-start gap-2 overflow-scroll rounded-lg bg-gray-100">
        {chatMessages.map((c, i) => (
          <ChatMessage
            key={i}
            pic={c.pic}
            firstName={c.firstName}
            lastName={c.lastName}
            msg={c.message}
          />
        ))}
      </div>
      <div className="mx-auto flex w-3/12 flex-col gap-3">
        <input
          className="w-full rounded-md p-2 outline-none"
          type="text"
          placeholder="message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />

        <input
          className="w-full cursor-pointer rounded-md bg-white p-2 font-bold text-blue-700 hover:bg-gray-200 hover:text-blue-500 active:translate-y-0.5"
          type="Submit"
          onClick={() => {
            dispatch(
              addMessage(
                {
                  firstName: "Sumit",
                  lastName: "Bhardwaj",
                  pic: IMG_URL,
                  message: liveMessage,
                },
                setLiveMessage("")
              )
            );
          }}
        />
      </div>
    </div>
  );
};

const LiveChatPage = () => {
  return (
    <div className="relative mx-auto flex h-[150vh] w-[100%] flex-col gap-10 text-center text-gray-200">
      <Sidebar />
      <LiveChat />
    </div>
  );
};
export default LiveChatPage;
