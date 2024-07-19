import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ socket }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = (e) => {
    e.preventDefault();
    if (username !== "" && room !== "") {
      socket.emit("room", room);
      navigate("chat", {
        state: { username: username, room: room },
      });
    }
  };

  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4 text-gray-300">ChitChat</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-purple-600">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
            autoComplete="off"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-purple-600">
            Room Id
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
            autoComplete="off"
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md py-2 px-4 w-full"
          onClick={joinRoom}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;
