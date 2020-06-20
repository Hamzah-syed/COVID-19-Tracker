import React from "react";
import ReactApexChart from "react-apexcharts";
import BarCountryDataContent from "./BarCountryDataContent";

const BarCountryData = ({
  countryCrdData: { confirmed, recovered, deaths },
}) => {
  if (!confirmed) {
    return "";
  }

  const confirmedVal = confirmed.value;
  const recoveredVal = recovered.value;
  const deathsVal = deaths.value;

  const series = [
    {
      data: [confirmedVal, recoveredVal, deathsVal],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {},
      },
    },
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Infected", "Recovered", "Deaths"],
      labels: {
        style: {
          fontSize: "17px",

          colors: ["#d8d8d8", "#d8d8d8", "#d8d8d8"],
        },
      },
    },
  };

  return (
    <div className="w-full py-24 bg-gray-900 border-solid border-b-2 border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-16 text-gray-400">
            Country Statistics
          </h1>
          <div id="chart">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCountryData;
