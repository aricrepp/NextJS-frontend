import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  HeroScrollDownProps,
  HeroScrollUpProps,
  HeroScrollToSectionProps,
} from "@/types/types";

export const HeroScrollDown: React.FC<HeroScrollDownProps> = ({ idName }) => {
  const handleScroll = () => {
    const nextSection = document.getElementById(idName);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="absolute bottom-[3em] flex justify-center items-center w-[80px] z-40">
      <button className="w-[3em] h-[2em]">
        <TiArrowSortedDown
          className="animate-blink"
          style={{ color: "white" }}
          size={40}
          onClick={handleScroll}
        />
      </button>
    </div>
  );
};

export const HeroScrollUp: React.FC<HeroScrollUpProps> = ({
  idName,
  position,
  bg,
}) => {
  const handleScroll = () => {
    const nextSection = document.getElementById(idName);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`${position} top-[3em] flex justify-center items-center w-[50px] h-[50px] z-40 bg-[${bg}] rounded-full`}
    >
      <button className="w-[3em] h-[2em] flex justify-center items-center">
        <TiArrowSortedUp
          className="animate-blink"
          style={{ color: "white" }}
          size={40}
          onClick={handleScroll}
        />
      </button>
    </div>
  );
};

export const HeroScrollToSection: React.FC<HeroScrollToSectionProps> = ({
  idName,
  position,
  displayName,
}) => {
  const handleScroll = () => {
    const nextSection = document.getElementById(idName);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`${position} flex justify-center items-center w-auto z-40`}>
      <button onClick={handleScroll} className="w-auto h-[2em] text-white">
        {displayName}
      </button>
    </div>
  );
};
