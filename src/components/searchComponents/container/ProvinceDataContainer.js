import React, { useState, useEffect } from "react";
import CountryPicker from "../components/countryPicker/CountryPicker";
import ProviceDataTabel from "../components/provinceData/ProvinceDataTabel";
import BarCountryData from "../components/barCountryData/BarCountryData";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries";

const ProviceDataContainer = () => {
  const [contryNamePro, setContryNamePro] = useState("");
  const [provinceData, setProvinceData] = useState([]);
  const [countryCrdData, setCountryCrdData] = useState({});
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const FetchProvinceData = async () => {
      try {
        if (contryNamePro !== "") {
          const { data } = await axios.get(`${url}/${contryNamePro}/confirmed`);
          const modifiedProData = data.map((data) => ({
            proName: data.provinceState,
            proConfirmed: data.confirmed,
            proRecovered: data.recovered,
            proDeaths: data.deaths,
          }));
          setProvinceData(modifiedProData);
        }
      } catch (error) {
        return "Data Not Found" + error;
      }
    };

    setShowBar(false);
    FetchProvinceData();
  }, [contryNamePro]);

  useEffect(() => {
    const fetchCountryCrd = async () => {
      try {
        if (contryNamePro === "Select Country....") {
          return "";
        }
        if (showBar !== false) {
          const {
            data: { confirmed, recovered, deaths },
          } = await axios.get(`${url}/${contryNamePro}`);
          setCountryCrdData({ confirmed, recovered, deaths });
        }
      } catch (error) {
        return "Data Not Found" + error;
      }
    };
    fetchCountryCrd();
  }, [showBar, contryNamePro]);

  return (
    <div className="">
      <div className="w-full bg-gray-900 py-32 ">
        <div className="container mx-auto mt-20 px-4">
          <h1 className="pb-12 text-xl font-semibold lg:px-64 text-gray-400 text-center">
            Here you can find Stats Of Covid-19 of Any Country As Well As Its
            Provences If Any
          </h1>
          <CountryPicker
            color="text-gray-400"
            setContryNamePro={setContryNamePro}
            contryNamePro={contryNamePro}
          />
        </div>
      </div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <ProviceDataTabel provinceData={provinceData} />
          {contryNamePro !== "" && contryNamePro !== "Select Country...." ? (
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <button
                onClick={() => setShowBar(true)}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Country Statistics
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
      {showBar !== false ? (
        <BarCountryData countryCrdData={countryCrdData} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProviceDataContainer;
