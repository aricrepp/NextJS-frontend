import { Github, LinkedIn } from "../images/socialImages";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="h-[14em] flex justify-center items-center gap-4">
        <Link
          className="p-3 border border-[#827ae8] bg-[#232323] rounded-2xl hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)]"
          style={{ boxShadow: "0 0 6px inset rgba(78, 65, 228, 0.7)" }}
          href="https://www.linkedin.com/in/aric-repp"
        >
          <LinkedIn />
        </Link>
        <Link
          className="p-3 border border-[#827ae8] bg-[#232323] rounded-2xl hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)]"
          style={{ boxShadow: "0 0 6px inset rgba(78, 65, 228, 0.7)" }}
          href="https://github.com/aricrepp"
        >
          <Github />
        </Link>
      </div>
    </footer>
  );
};
