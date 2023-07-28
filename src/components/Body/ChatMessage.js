import React from "react";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div className="flex cursor-pointer items-start gap-2 rounded-lg p-2 hover:bg-gray-300">
      <div className="flex h-16 w-16 items-end">
        <img
          src={props.pic}
          alt="profilePic"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-center text-black">
        <p className="mt-2 flex font-bold">
          {props.firstName} {props.lastName}
        </p>
        <span className="w-[290px] text-left text-lg text-black">
          {props.msg}{" "}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
