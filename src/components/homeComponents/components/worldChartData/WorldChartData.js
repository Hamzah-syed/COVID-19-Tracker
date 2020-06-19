import React from "react";
import ReactApexChart from "react-apexcharts";

const WorldChartData = ({ data }) => {
  const series = [
    {
      name: "Infected",
      data: data.map(({ confirmed }) => confirmed),
    },
    {
      name: "Deaths",
      data: data.map(({ deaths }) => deaths),
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: data.map(({ date }) => date),
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div>
      <div className="pb-20 px-4 ">
        <h1 className="text-3xl text-gray-900 font-semibold text-center">
          Global Daily Stats Of COVID-19
        </h1>
        <h1 className="md:px-32 lg:px-32 text-lg py-4 text-gray-600 font-semibold text-center capitalize">
          This is how covid 19 cases increasing day by day Go to About Section
          to learn more About covid-19
        </h1>
      </div>

      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default WorldChartData;
