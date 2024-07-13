import React from "react";
import pp from "../../assets/profile.jpeg";

function Chat() {
  return (
    <div className="flex flex-col w-full bg-transparent text-black">
      {/* Header */}
      <div className="h-24 bg-[#b585cd] border-b">
        <div className="ml-10 h-full flex items-center bg-transparent">
          <img
            src={pp}
            alt="pp"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4 bg-transparent">
            <p className="bg-transparent text-3xl font-semibold">Mehmet</p>
            <p className="bg-transparent text-xl">Online</p>
          </div>
        </div>
      </div>
      {/* Chat Area */}
      <div className="grow bg-transparent"></div>
      {/* Text Area */}
      <div className="flex justify-center gap-2 items-center h-20 bg-transparent">
        <input
          type="text"
          className="px-2 w-5/6 h-1/2 bg-white border-purple-700 border rounded-lg"
        />
        <button className="w-20 h-1/2 bg-white border-purple-700 border rounded-lg"></button>
      </div>
    </div>
  );
}

export default Chat;
