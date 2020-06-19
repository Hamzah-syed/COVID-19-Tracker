import React, { useState, useEffect } from "react";
import axios from "axios";
import WorldChartData from "../components/worldChartData/WorldChartData";

const WorldChartDataContainer = () => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchDailyData = async () => {
      try {
        const { data } = await axios.get(
          "https://covid19.mathdro.id/api/daily"
        );
        const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
        }));
        setdailyData(modifiedData);
      } catch (error) {
        return "data not found";
      }
    };
    fetchDailyData();
  }, []);

  return (
    <div className="container py-32 mx-auto">
      <WorldChartData data={dailyData} />
    </div>
  );
};

export default WorldChartDataContainer;
