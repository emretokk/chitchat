import LeftBar from "./LeftBar";
import Chat from "./Chat";
import { useLocation } from "react-router-dom";

function Home({ socket }) {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex w-11/12 bg-[#c19ed2] h-[90%] rounded-2xl text-white">
        <Chat state={location.state} socket={socket} />
      </div>
    </div>
  );
}

export default Home;
