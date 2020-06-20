import React from "react";
import ImgMask from "../../Images/Covid-19maskMan.jpg";

const DosAndDont = () => {
  return (
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Do’s and Don’ts
          </h1>
          <p class="mb-8 leading-relaxed">
            Self-quarantining and social distancing is the best protocol you can
            follow at this point, especially since many areas are enforcing
            lockdowns and shelter in place orders. Self-quarantining and social
            distancing is the best protocol you can follow at this point,
            especially since many areas are enforcing lockdowns and shelter in
            place orders.
          </p>
          <div class="flex justify-center">
            <a
              href="https://visme.co/blog/coronavirus-prevention/"
              target="_blank"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              More Details
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="Covid-19"
            src={ImgMask}
          />
        </div>
      </div>
    </section>
  );
};

export default DosAndDont;
