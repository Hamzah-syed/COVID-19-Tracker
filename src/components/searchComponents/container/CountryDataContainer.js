import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCountryData from "../components/cardCountryData/CardCountryData";
import CountryPicker from "../components/countryPicker/CountryPicker";
import BarCountryData from "../components/barCountryData/BarCountryData";

const url = "https://covid19.mathdro.id/api/countries";

const CountryPickerContainer = () => {
  //card data
  const [countryCrdData, setCountryCrdData] = useState({});
  //country name
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    const fetchCountryCrd = async () => {
      try {
        if (countryName === "Select Country....") {
          return "";
        }
        const {
          data: { confirmed, recovered, deaths },
        } = await axios.get(`${url}/${countryName}`);
        setCountryCrdData({ confirmed, recovered, deaths });
      } catch (error) {
        return "Data Not Found" + error;
      }
    };
    fetchCountryCrd();
  }, [countryName]);

  return (
    <div>
      <div className="w-full py-24">
        <h1 className="pb-16 text-3xl font-semibold text-gray-700 text-center">
          Search For Country Statistics
        </h1>
        <CountryPicker setCountryName={setCountryName} />
      </div>
      {/* validation if no value is select  */}
      {countryName === "Select Country...." ? (
        <h1 className="-mt-10 text-center pb-24 text-red-500">
          Select Country
        </h1>
      ) : (
        <div>
          <CardCountryData countryCrdData={countryCrdData} />
          <BarCountryData countryCrdData={countryCrdData} />
        </div>
      )}
    </div>
  );
};

export default CountryPickerContainer;
