import React from "react";
import CountUp from "react-countup";

const CardCountryDataContent = ({ cardData }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={cardData.title === "Infected" ? 1 : 2}
          className="text-indigo-500 w-12 h-12 mb-3 inline-block"
          viewBox="0 0 24 24"
        >
          <path d={cardData.icon}></path>
        </svg>
        <h2 className="title-font font-medium text-3xl text-gray-900">
          <CountUp
            start={0}
            end={cardData.value}
            duration={2}
            separator={","}
          />
        </h2>
        <p className="leading-relaxed">{cardData.title}</p>
      </div>
    </div>
  );
};

export default CardCountryDataContent;
