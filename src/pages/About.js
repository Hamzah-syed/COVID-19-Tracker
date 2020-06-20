import React from "react";
import AboutHero from "../components/hero/aboutHero/AboutHero";
import CasesIncreasing from "../components/aboutComponent/ParaGraphAfterHero";
import DosAndDont from "../components/aboutComponent/DosAndDont";

const About = () => {
  return (
    <div>
      <AboutHero />
      <CasesIncreasing />
      <DosAndDont />
    </div>
  );
};

export default About;
