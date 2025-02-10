import { StackDisplay } from "../stackDisplay";

export const Timeline = () => {
  return (
    <div className="relative flex mx-auto justify-center items-center max-w-5xl mt-14">
      <div className="absolute left-[0.75em] w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
      <div className="flex flex-col space-y-8">
        <div className="relative flex items-center w-full">
          <div className="relative w-6 h-6 flex items-center justify-center bg-white text-white rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="w-[9.1em] text-4xl text-gray-500 pl-5">2021-2024</div>
          <div className="w-[36em] pl-[1em] flex flex-col justify-items items-start text-left">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              There and back again, a contractor's journey
            </h3>
            <hr className="w-full my-3 border-gray-700" />
            <div className="w-full text-md text-white flex justify-between">
              <p className="text-lg text-gray-300">Full-Stack Engineer</p>
              <p className="text-lg text-gray-500">Corbus LLC</p>
            </div>
            <br />
            <p className="text-lg text-gray-400">
              My time at Corbus was my largest period of growth. Having dual
              interviewed with one of their Fortune 500 clients as a{" "}
              <span className="text-[#827ae8]"> Full-Stack Engineer</span>, I
              helped launch a key initiative to restructure their internal
              portals into one micro-frontend architecture. For my contracts I
              operated largely as a frontend lead and designer to our skeleton
              crew sized team. Internally for Corbus, I helped kickstart 2
              company applications dealing with ML and AI.
            </p>
            <StackDisplay
              stackList={[
                "Vue",
                "NextJS",
                "Python",
                "GCP",
                "Typescript",
                "Tailwind",
                "Figma",
                "Github",
                "Actions",
                "Jira",
              ]}
            />
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="relative w-6 h-6 flex items-center justify-center bg-white text-white rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="w-[9.1em] text-4xl text-gray-500 pl-5">2021</div>
          <div className="w-[36em] pl-[1em] flex flex-col justify-items items-start text-left mt-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Break on through to the other side
            </h3>
            <hr className="w-full my-3 border-gray-700" />
            <div className="w-full text-md text-white flex justify-between">
              <p className="text-lg text-gray-300">Full-Stack Engineer</p>
              <p className="text-lg text-gray-500">Bloom Institute</p>
            </div>
            <br />
            <p className="text-lg text-gray-400">
              After completing my certificate in Full-Stack Engineering, I
              joined a small, 3-month contract group to complete a contract
              management application as a{" "}
              <span className="text-[#827ae8]"> Full-Stack Engineer</span>. As
              the only engineer with a design background, I owned the UI and
              frontend development.
            </p>
            <StackDisplay
              stackList={[
                "React",
                "Typescript",
                "Node",
                "GCP",
                "Typescript",
                "Figma",
                "Github",
              ]}
            />
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="relative w-6 h-6 flex items-center justify-center bg-white text-white rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="w-[9.1em] text-4xl text-gray-500 pl-5">2019-2021</div>
          <div className="w-[36em] pl-[1em] flex flex-col justify-items items-start text-left mt-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              One small step for man *(me)
            </h3>
            <hr className="w-full my-3 border-gray-700" />
            <div className="w-full text-md text-white flex justify-between">
              <p className="text-lg text-gray-300">Quality Analyst</p>
              <p className="text-lg text-gray-500">Great Dane</p>
            </div>
            <br />
            <p className="text-lg text-gray-400">
              In the fall of 2019, I was lucky to land a position as an
              <span className="text-[#827ae8]"> Analyst </span>
              with Great Dane out of Brazil, Indiana. I was able to utilize my
              technical skills as part of the Quality Department, creating
              technical documents and strategies to improve the quality at the
              facility
            </p>
            <StackDisplay stackList={["JavaScript", "Excel"]} />
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="relative w-6 h-6 flex items-center justify-center bg-white text-white rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="w-[9.1em] text-4xl text-gray-500 pl-5">2012-2016</div>
          <div className="w-[36em] pl-[1em] flex flex-col justify-items items-start text-left mt-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Ain't no rest for the wicked
            </h3>
            <hr className="w-full my-3 border-gray-700" />
            <div className="w-full text-md text-white flex justify-between">
              <p className="text-lg text-gray-300">Student</p>
              <p className="text-lg text-gray-500">Purdue University</p>
            </div>
            <br />
            <p className="text-lg text-gray-400">
              B.S. Computer Graphic Technology
            </p>
          </div>
        </div>
        <div className="relative flex items-center w-full">
          <div className="relative w-6 h-6 flex items-center justify-center bg-white text-white rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="w-[9.1em] text-4xl text-gray-500 pl-5">1993</div>
          <div className="w-[36em] pl-[1em] flex flex-col justify-items items-start text-left">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Let there be light
            </h3>
            <hr className="w-full my-3 border-gray-700" />
            <div className="w-full text-md text-white flex justify-between">
              <p className="text-lg text-gray-300">Born</p>
              <p className="text-lg text-gray-500">Phoenix, AZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
