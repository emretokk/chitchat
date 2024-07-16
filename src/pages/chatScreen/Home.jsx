import LeftBar from "./LeftBar";
import Chat from "./Chat";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex w-11/12 bg-[#c19ed2] h-[90%] rounded-2xl text-white">
        <LeftBar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
