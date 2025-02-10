import Image from "next/image";
import { ImageProps } from "@/types/types";

export const LeftMouse = (props: ImageProps) => {
  const { width } = props;

  const size = width || 16;

  return (
    <Image
      src={"/assets/left-click.svg"}
      alt="Left Mouse"
      className="w-[32px] h-[32px]"
      width={size}
      height={size}
      priority
    />
  );
};

export const MoveMouse = (props: ImageProps) => {
  const { width } = props;

  const size = width || 42;

  return (
    <Image
      src={"/assets/move-mouse.svg"}
      alt="Move Mouse"
      className="w-[32px] h-[32px]"
      width={size}
      height={size}
      priority
    />
  );
};
