import React from "react";
import pp from "../../assets/profile.jpeg";

function Person() {
  return (
    <li className="px-4 flex gap-2 items-center bg-transparent">
      <img src={pp} alt="pp" className="w-12 h-12 rounded-full object-cover" />
      <div className="h-full flex flex-col gap-0 bg-transparent">
        <p className="bg-transparent text-lg font-normal">Ahmet</p>
        <p className="bg-transparent text-sm font-normal text-gray-400">
          sa napiyon
        </p>
      </div>
    </li>
  );
}

function LeftBar() {
  return (
    <div className="flex flex-col w-1/6 bg-[#543165] rounded-l-2xl">
      {/* Title Area */}
      <div className="min-h-24 p-4 flex justify-between items-center bg-[#362042] rounded-tl-2xl border-b">
        <p className="bg-transparent text-xl font-bold">ChitChat</p>
        <img
          src={pp}
          alt="pp"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      {/* Users Area */}
      <div className="grow mt-2 bg-transparent overflow-auto scroll-smooth">
        <ul className="flex flex-col gap-4 bg-transparent">
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />

          <Person />
          <Person />
          <Person />

          <Person />
          <Person />
          <Person />
          <Person />
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
