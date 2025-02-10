import Image from "next/image";
import { ImageProps } from "@/types/types";

export const LinkedIn = (props: ImageProps) => {
  const { width } = props;

  const size = width || 16;

  return (
    <Image
      src={"/assets/linkedin.svg"}
      alt="LinkedIn"
      className="w-[32px] h-[32px]"
      width={size}
      height={size}
      priority
    />
  );
};

export const Github = (props: ImageProps) => {
  const { width } = props;

  const size = width || 42;

  return (
    <Image
      src={"/assets/github.svg"}
      alt="Github"
      className="w-[32px] h-[32px]"
      width={size}
      height={size}
      priority
    />
  );
};
