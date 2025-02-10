import { LeftMouse, MoveMouse } from "@/components/images/mouseImages";
import { useState } from "react";

const HeroImages = () => {
  const [meltButton, setMeltButton] = useState<string>("Start");

  const handleClick = () => {
    if (meltButton === "Start") {
      const event = new CustomEvent("customClick", {
        detail: { message: "Start" },
      });
      window.dispatchEvent(event);
      setMeltButton("Reset");
    } else if (meltButton === "Reset") {
      const event = new CustomEvent("customClick", {
        detail: { message: "Reset" },
      });
      window.dispatchEvent(event);
      setMeltButton("Start");
    }
  };

  return (
    <div className="absolute right-[3em] flex flex-col justify-start items-start w-[80px] z-40 gap-5">
      <span className="flex justify-center items-center gap-2 text-white pr-1">
        <p>Scatter</p>
        <LeftMouse />
      </span>
      <span className="flex justify-center items-center gap-2 text-white">
        <p>Bounce</p>
        <MoveMouse />
      </span>
      <span className="flex justify-center items-center gap-2 text-white">
        <p>Melt</p>
        <button
          className="w-[3em] h-[2em] bg-[#232323] rounded"
          onClick={handleClick}
        >
          {meltButton}
        </button>
      </span>
    </div>
  );
};

export default HeroImages;
