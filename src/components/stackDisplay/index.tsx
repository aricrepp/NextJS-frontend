import { stackDisplayProps } from "@/types/types";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const getPhotoFromName = (name: string) => {
  const size = 16;
  return (
    <Image
      src={`/assets/${name.toLocaleLowerCase()}.svg`}
      alt="Left Mouse"
      className="w-[24px] h-[24px] hover:w-[48px] hover:h-[48px]"
      width={size}
      height={size}
      priority
    />
  );
};

export const StackDisplay: React.FC<stackDisplayProps> = ({ stackList }) => {
  return (
    <div className="relative flex mt-5">
      {stackList.map((stack, index) => (
        <TooltipProvider key={index} delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                key={index}
                className="relative flex justify-center items-center w-[48px] h-[48px] p-2 -mr-3 rounded-full bg-white border-2 border-black z-10 hover:z-30"
              >
                {getPhotoFromName(stack)}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{stack}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
