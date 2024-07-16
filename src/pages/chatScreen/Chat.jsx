import pp from "../../assets/profile.jpeg";

function Text() {
  return (
    // texti biz gönderdiysek items-end eklenecek
    <div className="flex flex-col w-1/2 py-2 px-14 bg-transparent">
      <div className="flex items-center w-fit min-h-10 bg-pink-200 rounded-xl">
        <p className="px-4 h-full w-full bg-transparent">lorem1asdfdasf00</p>
      </div>
      <div className="flex bg-transparent px-2 py-1">
        <p className="bg-transparent text-sm">Ahmet 10:20 </p>
      </div>
    </div>
  );
}

function Chat() {
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
            <p className="bg-transparent text-3xl font-semibold">Mehmet</p>
            <p className="bg-transparent text-xl">Online</p>
          </div>
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 mt-2 bg-transparent overflow-auto scroll-smooth">
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
      </div>
      {/* Text Area */}
      <div className="flex justify-center gap-2 items-center h-20 bg-[#b585cd] rounded-br-2xl">
        <input
          type="text"
          className="px-2 w-5/6 h-1/2 bg-white border-purple-700 border rounded-lg"
        />
        <button className="w-20 h-1/2 bg-white border-purple-700 border rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
