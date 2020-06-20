import React from "react";
import SearchHero from "../components/hero/searchHero/SearchCountryHero";
import CountryPickerContainer from "../components/searchComponents/container/CountryDataContainer";

const SearchCountry = () => {
  return (
    <div>
      <SearchHero />
      <CountryPickerContainer />
    </div>
  );
};

export default SearchCountry;
