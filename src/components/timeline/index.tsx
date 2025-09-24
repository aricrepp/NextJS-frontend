import { StackDisplay } from "../stackDisplay";

import * as Accordion from "@radix-ui/react-accordion"
import { AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

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
                "React",
                "NextJS",
                "Python",
                "GCP",
                "Typescript",
                "Tailwind",
                "Figma",
                "Reactflow",
                "Apache Echarts",
                "Github",
                "Actions",
                "Jira",
              ]}
            />
            <Accordion.Root
              className="w-full mt-6 rounded-md outline-none border-none focus:border-none focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0 focus:shadow-none"
              type="single"
              defaultValue="item-0"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-400">Detailed Breakdown</AccordionTrigger>
                <AccordionContent className="text-white bg-[#292929]">
                  <section>
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Frontend Micro-Architecture & Component Design System Implementation</p>
                      <p className="text-lg text-gray-500">(P&G)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Helped launch a huge internal initiative to revamp all campaign platforms into 1 micro frontend. Started the initial designs to secure funding from each business unit. Lead the frontend for the first 2 projects to ensure success of the platforms.
                    </p>
                    <StackDisplay
                      stackList={[
                        "Github",
                        "Actions",
                        "Jira",
                        "Figma",
                      ]}
                    />
                  </section>
                  <section className="mt-8">
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Micro Frontend Platform One</p>
                      <p className="text-lg text-gray-500">(P&G)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Built the platform that secured funding for the initiative. Platform surrounded utilizing segment and digital data to accurately predict sample size of audience dependant on category selections.
                    </p>
                    <StackDisplay
                      stackList={[
                        "React",
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
                  </section>
                  <section className="mt-8">
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Campaign Creation Platform Two</p>
                      <p className="text-lg text-gray-500">(P&G)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Built the platform that would be the package for all related campaign data and campaign ad platform data. Allowed users to maintain a consistent origin of data from origin to setup to go-live.
                    </p>
                    <StackDisplay
                      stackList={[
                        "Vue",
                        "Python",
                        "GCP",
                        "Typescript",
                        "Tailwind",
                        "Apache Echarts",
                        "Figma",
                        "Github",
                        "Actions",
                        "Jira",
                      ]}
                    />
                  </section>
                  <section className="mt-8">
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Interactive Graphical Interface Application</p>
                      <p className="text-lg text-gray-500">(P&G)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Redesigned user interface using node-based architecture, increasing user acceptance by 60%.
                      Collaborated with product owners to develop wireframes through iterative processes.
                      Built responsive components that scaled across both the old platform and new platform.</p>
                    <StackDisplay
                      stackList={[
                        "NextJS",
                        "Python",
                        "GCP",
                        "Typescript",
                        "Tailwind",
                        "Figma",
                        "Reactflow",
                        "Github",
                        "Actions",
                        "Jira",
                      ]}
                    />
                  </section>
                  <section className="mt-8">
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Supply Chain Automation Service</p>
                      <p className="text-lg text-gray-500">(Corbus)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Developed frontend components for data visualization of Nth level supply chain mapping. Collected supply chain data from various sources filtered by NLP techniques. Created 10 point predictive index and process to streamline supplier node mappings</p>
                    <StackDisplay
                      stackList={[
                        "React",
                        "Python",
                        "GCP",
                        "Figma",
                      ]}
                    />
                  </section>
                  <section className="mt-8">
                    <div className="w-full text-md text-white flex justify-between">
                      <p className="text-lg text-gray-300">Optimization Tool with Data Visualization</p>
                      <p className="text-lg text-gray-500">(Corbus)</p>
                    </div>
                    <br />
                    <p className="text-lg text-gray-400">
                      Leveraged Linear Regression algorithm (ML) to optimize choices from user parameters. Implemented clean, reusable UI components for future production beyond MVP. Created full site identity and design around data optimization </p>
                   <StackDisplay
                      stackList={[
                        "Vue",
                        "Python",
                        "GCP",
                        "Figma",
                      ]}
                    />
                  </section>
                  
                </AccordionContent>
              </AccordionItem>
            </Accordion.Root>
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
            <StackDisplay stackList={["javascript", "Excel"]} />
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
