import React from "react";
import { Link } from "react-router-dom";

const HomeHeroContent = () => {
  return (
    <div className="container md:px-20 px-4 mx-auto">
      <h1
        style={{ fontSize: "50px" }}
        className="text-gray-200 font-semibold text-center"
      >
        Covid-19
      </h1>
      <p className="text-gray-400 text-2xl text-center py-8">
        COVID-19 is a serious global infectious disease outbreak with nearly
        550,000 cases and around 25,000 deaths worldwide
      </p>
      <div className="flex justify-center w-full ">
        <Link to="/about">
          <button className=" text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base  md:mt-0 duration-700 w-7/12 lg:w-full sm:max-w-xs ">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroContent;
