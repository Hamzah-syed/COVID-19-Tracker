import React from "react";

const Header = () => {
  return (
    <header className="text-gray-500 bg-gray-900 body-font w-full fixed shadow-2xl z-30">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="https://img.icons8.com/nolan/64/coronavirus.png" />
          <span className="ml-3 text-xl">KOVID-19</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="mr-5 text-gray-400 hover:text-white duration-700 focus:outline-none">
            Home
          </button>
          <button className="mr-5 text-gray-400 hover:text-white duration-700 focus:outline-none">
            About
          </button>
          <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base  md:mt-0 duration-700 ">
            Search
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
