import React, { useState, useEffect } from "react";
import StepDataContent from "./StepDataContent";

const StepData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [stepdata, setstepdata] = useState([]);

  const StepContent = () => {
    if (!confirmed) {
      return "loading...";
    }
    useEffect(() => {
      StepContent();
    }, [confirmed, StepContent]);

    setstepdata([
      {
        id: 1,
        header: "INFECTED",
        title: "Number of active cases of COVID-19: ",
        icon:
          "M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z",
        lastUpdate: lastUpdate,
        value: confirmed.value,
      },
      {
        id: 2,
        header: "RECOVERED",
        title: "Number of recoveris cases from COVID-19: ",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
        lastUpdate: lastUpdate,
        value: recovered.value,
      },
      {
        id: 3,
        header: "DEATHS",
        title: "Number of deaths caused by COVID-19: ",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2",
        lastUpdate: lastUpdate,
        value: deaths.value,
      },
    ]);
  };

  return (
    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
      {stepdata.map((stepdata) => (
        <StepDataContent key={stepdata.id} stepdata={stepdata} />
      ))}
    </div>
  );
};

export default StepData;
