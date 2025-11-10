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
import { AgentsOpsLinear } from "./components/agentsops-linear";

const LandingPage = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <Hero />
      <OurServices />
      <OurExpertise />
      <WhatMakesUsStandout />
      <HowItWork />
      <OurProcess />
      <OurTeam />
      <Testimonials />
      <TechStack />
      <AgentsOpsLinear />
    </div>
  );
};

export default LandingPage;
