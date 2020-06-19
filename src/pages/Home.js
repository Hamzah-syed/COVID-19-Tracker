import React from "react";
import HomeHero from "../components/hero/homeHero/HomeHero";
import WorldCrdDataContainer from "../components/homeComponents/container/WorldCrdDataContainer";
import WorldChartDataContainer from "../components/homeComponents/container/WorldChartDataContainer";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <WorldCrdDataContainer />
      <WorldChartDataContainer />
    </div>
  );
};

export default Home;
