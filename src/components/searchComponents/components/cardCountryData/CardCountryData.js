import React, { useState, useEffect } from "react";
import CardCountryDataContent from "./CardCountryDataContent";

const CardCountryData = ({
  countryCrdData: { confirmed, recovered, deaths },
}) => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    const fetchCountryCrd = async () => {
      if (confirmed === undefined) {
        return "select country";
      }
      setCardData([
        {
          id: 1,
          icon:
            "M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z",
          value: confirmed.value,
          title: "Infected",
        },
        {
          id: 2,
          icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
          value: recovered.value,
          title: "Recovered",
        },
        {
          id: 3,
          icon: "M22 12h-4l-3 9L9 3l-3 9H2",
          value: deaths.value,
          title: "Deaths",
        },
      ]);
    };
    fetchCountryCrd();
  }, [confirmed]);

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 pb-20 mx-auto">
        <div className="flex flex-wrap justify-center -m-4 text-center">
          {!confirmed ? (
            <h1 className="-mt-10 text-red-500">Select Country</h1>
          ) : (
            cardData.map((cardData) => (
              <CardCountryDataContent key={cardData.id} cardData={cardData} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CardCountryData;
