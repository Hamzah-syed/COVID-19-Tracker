import React from "react";

const AbutHeroContent = () => {
  return (
    <section class="w-full text-gray-500 bg-gray-900 body-font bg-opacity-75">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col ">
        <div class="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start text-left mb-16 md:mb-0  ">
          <h1 class="title-font sm:text-4xl text-3xl text-left mb-4 font-medium text-white">
            What is a Coronavirus?
          </h1>
          <p class="mb-8 leading-relaxed">
            Coronaviruses are a large family of viruses that are known to cause
            illness ranging from the common cold to more severe diseases such as
            Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory
            Syndrome (SARS).
          </p>
          <div class="flex ">
            <a
              href="https://en.wikipedia.org/wiki/COVID-19_pandemic"
              target="_blank"
              class=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbutHeroContent;
