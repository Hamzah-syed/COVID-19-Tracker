import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryPicker = ({ setCountryName, setContryNamePro, color }) => {
  const [CountriesPicker, setCountries] = useState([]);
  const [cName, setCName] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const {
          data: { countries },
        } = await axios.get("https://covid19.mathdro.id/api/countries");
        const modifiedCountryNames = countries.map((countries) => ({
          names: countries.name,
        }));
        setCountries(modifiedCountryNames);
        if (!setContryNamePro) {
          setCountryName(cName);
        } else {
          setContryNamePro(cName);
        }
      } catch (error) {
        return "Data Not Found" + error;
      }
    };
    fetchCountries();
  }, [cName, setContryNamePro, setCountryName]);

  return (
    <div className="container mx-auto md:w-1/3 px-3 mb-6 md:mb-0 ">
      <label
        className={`block uppercase tracking-wide  text-base font-bold mb-2 ${
          !color ? "text-gray-700" : color
        }`}
      >
        Country
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          defaultValue={cName}
          onChange={(e) => setCName(e.target.value)}
        >
          <option>Select Country....</option>
          {CountriesPicker.map((country, i) => (
            <option key={i}>{country.names}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fillCurrent h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CountryPicker;
