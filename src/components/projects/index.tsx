import { StackDisplay } from "../stackDisplay";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="w-full mt-20 flex flex-wrap justify-center items-center">
      <section className="w-1/2  flex flex-col items-center gap-4 md:grid md:grid-cols-2 md:gap-4">
        <div className="relative p-6 flex flex-col justify-between items-start border border-white rounded-lg text-white">
          <span className="absolute top-0 left-0 w-full h-[1em] rounded-t-md bg-white"></span>
          <div className="flex justify-between items-center w-full">
            <Link href="/tasks">
              <h4 className="text-xl py-4 underline">Full-Stack App</h4>
            </Link>
            <Link href="/tasks">
              <p className="text-[#827ae8] underline">LIVE</p>
            </Link>
          </div>
          <p className="mt-1 text-gray-400 text-md basis-2/3">
            Wanting to expand my horizons, I deployed a full stack AWS app using
            NextJS with an EC2 backend hosting a Node/MySQL backend.
          </p>
          <StackDisplay
            stackList={["NextJS", "AWS", "Tailwind", "Node", "MySQL"]}
          />
        </div>
        <div className="relative p-6 flex flex-col justify-between items-start border border-white rounded-lg text-white">
          <span className="absolute top-0 left-0 w-full h-[1em] rounded-t-md bg-white"></span>
          <div className="flex justify-between items-center w-full">
            <h4 className="text-xl py-4">Atak</h4>
            <p className="text-[#E8E87B]">In Progress</p>
          </div>
          <p className="mt-1 text-gray-400 text-md basis-2/3">
            An NPM package utilizing local AI to address issues within test
            suites. Some test suites can get very large, making it quite
            difficult to track which tests pass the smell test.{" "}
          </p>
          <StackDisplay stackList={["Node", "Typescript", "NPM", "LLaMa"]} />
        </div>
        <div className="relative p-6 flex flex-col justify-between items-start border border-white rounded-lg text-white">
          <span className="absolute top-0 left-0 w-full h-[1em] rounded-t-md bg-white"></span>
          <div className="flex justify-between items-center w-full">
            <h4 className="text-xl py-4">EQO</h4>
            <p className="text-[#E8E87B]">In Progress</p>
          </div>
          <p className="mt-1 text-gray-400 text-md basis-2/3">
            Social platform focusing on experiencing local music and
            entertainment through a centralized hub.
          </p>
          <StackDisplay
            stackList={["Flutter", "Dart", "Firebase", "Figma", "AWS"]}
          />
        </div>
      </section>
    </section>
  );
};
