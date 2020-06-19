import React from "react";
import HomeHeroContent from "./HomeHeroContent"
import Bgvideo from "../../../videos/Untitled-1.m4v";


const HomeHero = () => {
  return (
    <div className="h-screen relative ">
      <video
        className="z-0 min-w-full min-h-full object-cover absolute h-screen"
        autoPlay
        loop
        muted
      >
        <source src={Bgvideo} type="video/mp4" />
      </video>
      <div className="h-screen w-full absolute top-0 z-10 bg-gray-900 bg-opacity-75 flex justify-center items-center">
        <HomeHeroContent/>
      </div>
      {/* content */}
    </div>
  );
};

export default HomeHero;
