// import React from "react";
import { Hero } from "./components/hero";
import { OurProcess } from "./components/our-process";
import { HowItWork } from "./components/how-it-work";
import { OurServices } from "./components/our-services";
import { WhatMakesUsStandout } from "./components/what-make-us-standout";
import { OurExpertise } from "./components/our-expertise";
import { OurTeam } from "./components/our-team";
import { Testimonials } from "./components/testimonials";
import { TechStack } from "./components/tech-stack";
import { Contact } from "./components/contact";
import { cn } from "@/lib/utils";

const LandingPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <Hero />
      <div id="services">
        <OurServices />
      </div>
      <div id="expertise">
        <OurExpertise />
      </div>
      <div id="our-strength">
        <WhatMakesUsStandout />
      </div>
      <div id="how-it-work">
        <HowItWork />
      </div>
      <div id="our-process">
        <OurProcess />
      </div>
      <div id="our-team">
        <OurTeam />
      </div>
      <Testimonials />
      <TechStack />
      <div
        id="contact"
        className={cn(
          "bg-[radial-gradient(100%_100%_at_50%_100.08%,_#001857_0%,_#001344_100%)]",
          "min-h-[630px] px-20 py-24 overflow-hidden relative max-sm:px-6"
        )}
      >
        <div
          className={cn(
            "bg-[url(assets/images/circle-frame.png)] bg-no-repeat bg-[size:1150px_1150px]",
            "h-[1150px] w-[1150px] absolute top-[23%] left-[50%] translate-x-[-50%] z-0"
          )}
        />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
