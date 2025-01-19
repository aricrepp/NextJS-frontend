"use client";

import { IoMdRocket } from "react-icons/io";

export default function Header() {
  return (
    <header className="w-dvw flex justify-center items-center h-[200px] bg-[#0D0D0D]">
      <div className="flex justify-self-center items-center">
        <IoMdRocket
          className="mb-3"
          style={{ color: "#55a8db", fontSize: "1.6em" }}
        />
        <h1 className="text-4xl font-black mb-4 text-[#55a8db]">
          Todo <span className="text-[#5f60ca]">App</span>
        </h1>
      </div>
    </header>
  );
}
