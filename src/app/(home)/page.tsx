"use client";

import { App } from "@/components/threeBlob";
import HeroText from "@/components/layers/heroText";
import HeroImages from "@/components/layers/heroImages";
import {
  HeroScrollUp,
  HeroScrollToSection,
} from "@/components/layers/heroScroll";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <section
        id="start-section"
        className="relative flex justify-center items-center h-dvh"
      >
        <HeroText />
        <App />
        <HeroImages />
        <div className="absolute bottom-5 w-auto flex justify-center items-center py-4 px-8 gap-4 border-2 rounded-2xl z-40">
          <HeroScrollToSection
            idName={"experience-section"}
            displayName={"Experience"}
            position={""}
          />
          <HeroScrollToSection
            idName={"project-section"}
            displayName={"Projects"}
            position={""}
          />
          <HeroScrollToSection
            idName={"contact-section"}
            displayName={"Contact"}
            position={""}
          />
        </div>
      </section>
      <div className="relative flex items-center flex-col h-auto">
        <HeroScrollUp
          idName={"start-section"}
          position={"sticky"}
          bg={"#232323"}
        />
        <section
          id="experience-section"
          className="relative flex justify-center items-center flex-col h-auto"
        >
          <div className="mt-[8em] flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl md:text-5xl">
              git commit -m 'Professional Experience'
            </h2>
            <Timeline />
          </div>
        </section>
        <section
          id="project-section"
          className="relative flex items-center flex-col"
        >
          <div className="mt-[8em] flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl md:text-5xl">git push origin 'Projects'</h2>
            <Projects />
          </div>
        </section>
        <section
          id="contact-section"
          className="relative flex items-center flex-col"
        >
          <div className="mt-[8em] flex flex-col justify-center items-center">
            <h2 className="text-white text-lg md:text-2xl text-center text-wrap w-[300px] md:w-auto">
              Let's connect and see how I can build your next big thing
            </h2>
            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}
