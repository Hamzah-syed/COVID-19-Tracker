import React, { useState, useEffect } from "react";
import StepData from "../components/worldCrdData/StepData";
import BarData from "../components/worldCrdData/BarData";
import axios from "axios";

const WorldCrdDataContainer = () => {
  const [WorldCrdData, setWorkdCrdData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get("https://covid19.mathdro.id/api");
        setWorkdCrdData({ confirmed, recovered, deaths, lastUpdate });
      } catch (error) {
        return "data not found";
      }
    };
    fetchData();
  }, []);

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="pb-20 w-full">
          <h1 className="text-3xl text-gray-300 text-center ">
            Global Stats Of COVID-19
          </h1>
        </div>
        <div className="flex flex-wrap w-full">
          <StepData data={WorldCrdData} />

          <BarData data={WorldCrdData} />
        </div>
      </div>
    </section>
  );
};

export default WorldCrdDataContainer;
