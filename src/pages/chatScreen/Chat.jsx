import { useEffect, useState } from "react";
import pp from "../../assets/profile.jpeg";

function Text({ txt, username, date, sender }) {
  return (
    // texti biz gönderdiysek items-end eklenecek
    <div
      className={`flex flex-col py-2 px-14 bg-transparent ${
        sender ? "items-end" : ""
      }`}
    >
      <div className="flex items-center w-fit min-h-10 bg-pink-200 rounded-xl">
        <p className="px-4 h-full w-full bg-transparent">{txt}</p>
      </div>
      <div className="flex bg-transparent px-2 py-1">
        <p className="bg-transparent text-sm">{username}</p>
      </div>
    </div>
  );
}

function Chat({ state, socket }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("messageReturn", (data) => {
      setMessageList((prev) => [...prev, data]);
      console.log("donus var");
    });
  }, [socket]);

  console.log("messagelist: ", messageList);
  async function sendMessage() {
    const messageContent = {
      username: state.username,
      room: state.room,
      message: message,
      date:
        new Date(Date.now).getHours() + " : " + new Date(Date.now).getMinutes(),
    };
    await socket.emit("message", messageContent);
    setMessageList((prev) => [...prev, messageContent]);
    setMessage("");
  }

  return (
    <div className="flex flex-col w-full bg-transparent text-black">
      {/* Header */}
      <div className="h-24 bg-[#b585cd] border-b rounded-tr-2xl">
        <div className="ml-10 h-full flex items-center bg-transparent">
          <img
            src={pp}
            alt="pp"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4 bg-transparent">
            <p className="bg-transparent text-3xl font-semibold">
              {state.username}
            </p>
            <p className="bg-transparent text-xl">Online</p>
          </div>
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 mt-2 bg-transparent overflow-auto scroll-smooth">
        {messageList.map((msg, i) => {
          const sender = msg.username === state.username;
          return (
            <Text
              txt={msg.message}
              username={msg.username}
              date={msg.date}
              sender={sender}
              key={i}
            />
          );
        })}
      </div>
      {/* Text Area */}
      <div className="flex justify-center gap-2 items-center h-20 bg-[#b585cd] rounded-br-2xl">
        <input
          type="text"
          className="px-2 w-5/6 h-1/2 bg-white border-purple-700 border rounded-lg"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="w-20 h-1/2 bg-white border-purple-700 border rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
