import React from "react";
import { MarqueeDemo } from "./Marquee";
import Service from "./Service";
import { TalentMarquee } from "./Talent";
import ProcessComponent from "./Process";

function Hero() {
  return (
    <>
      <div className="flex bg-[#f4f8ff]">
        <div className="flex-1 text-black z-10 p-4 l-8 pt-24 flex flex-col items-start">
          <h1 className="text-5xl ml-24 font-semibold ">
            Hype your Ideas with <span className="text-blue-500">TechHype</span>
          </h1>
          <p className="mt-6 ml-24">
            As the most trusted AI software developer, we create unique AI
            solutions, innovative mobile apps, and help you hire top global
            engineers, solving all your tech problems and bringing your ideas to
            life.
          </p>
          <button className="bg-black ml-24  text-white px-4 py-2 rounded-full mt-6">
            Schedule a Call
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://techype.in/webp/Hero.webp"
            alt="hero"
            className="w-full h-auto"
          />
        </div>
      </div>

      <MarqueeDemo />
      <Service />
      <TalentMarquee />
      <ProcessComponent />
    </>
  );
}

export default Hero;
