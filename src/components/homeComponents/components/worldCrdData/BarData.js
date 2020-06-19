import React from "react";

const BarData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loding...";
  }

  return (
    <div className="py-5 md:pb-16 w-full lg:w-7/12 md:w-6/12 flex justify-center items-end">
      <div className="mx-2 lg:w-2/12 md:w-3/12 w-3/12 max-w-xs text-center">
        <h1 className="py-2 text-base text-white">{confirmed.value}</h1>
        <div className="h-64 w-full bg-indigo-600"></div>
        <h1 className="py-2">INFECTED</h1>
      </div>
      <div className="mx-2 lg:w-2/12 md:w-3/12 w-3/12 max-w-xs text-center">
        <h1 className="py-2 text-base text-white">{recovered.value}</h1>
        <div className="h-32 w-full bg-indigo-600"></div>
        <h1 className="py-2">RECOVERED</h1>
      </div>
      <div className="mx-2 lg:w-2/12 md:w-3/12 w-3/12 max-w-xs text-center">
        <h1 className="py-2 text-base text-white">{deaths.value}</h1>
        <div className="h-10 w-full bg-indigo-600"></div>
        <h1 className="py-2">DEATHS</h1>
      </div>
    </div>
  );
};

export default BarData;
