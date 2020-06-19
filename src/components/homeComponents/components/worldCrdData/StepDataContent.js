import React from "react";

const StepDataContent = ({ stepdata }) => {
  return (
    <div className="flex relative pb-12">
      {stepdata.header === "DEATHS" ? (
        ""
      ) : (
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
        </div>
      )}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={`${stepdata.header === "INFECTED" ? 1 : 2}`}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d={stepdata.icon}></path>
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-medium title-font text-base text-white mb-1 tracking-wider">
          {stepdata.header}
        </h2>
        <h2 className="text-indigo-500 text-sm">
          {new Date(stepdata.lastUpdate).toDateString()}
        </h2>
        <p className="leading-relaxed ">
          {stepdata.title}{" "}
          <span className="text-white text-base">{stepdata.value}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default StepDataContent;
