import React from "react";
import AbutHeroContent from "./AbutHeroContent";
import BgImage from "../../../Images/AboutBackground.jpg";

const AboutHero = () => {
  const Herostyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };

  return (
    <div className="relative h-screen w-full " style={Herostyle}>
      <div className="flex items-center absolute w-full h-screen bg-gray-900 bg-opacity-75">
        <AbutHeroContent />
      </div>
    </div>
  );
};

export default AboutHero;
