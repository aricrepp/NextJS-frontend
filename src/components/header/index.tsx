"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:flex fixed left w-[60px] h-dvh bg-[#232323] flex flex-col justify-start items-center gap-16 z-50 group">
      <Link
        className="flex justify-self-center items-center mt-8 mr-4 tracking-tighter"
        href="/"
      >
        <div className="text-white text-4xl w-[1px] p-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
          /
        </div>
        <div className="text-white text-4xl w-[1px] p-2 transition-transform duration-200 group-hover:-translate-x-1 group-hover:translate-y-1">
          /
        </div>
      </Link>
      <h5 className="text-white text-xl -rotate-90 w-[220px] tracking-widest">
        ARIC REPP
      </h5>
    </header>
  );
}
