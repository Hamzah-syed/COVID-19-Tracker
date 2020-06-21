import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header className="text-gray-500 bg-gray-900 body-font w-full fixed shadow-2xl z-30">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <button className="flex title-font font-medium items-center text-white mb-4 md:mb-0 focus:outline-none ">
            <img src={Logo} alt="covid-19" />
            <span className="ml-3 text-xl">KOVID-19</span>
          </button>
        </Link>
        <nav className="md:ml-auto relative flex flex-wrap items-center text-base justify-center">
          <Link to="/">
            <button className="mr-5 text-gray-400 hover:text-white duration-700 focus:outline-none">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="mr-5 text-gray-400 hover:text-white duration-700 focus:outline-none">
              About
            </button>
          </Link>

          <div className="">
            <button
              onClick={() => setToggle(!toggle)}
              className="inline-flex  items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base  md:mt-0 duration-700 "
            >
              Search
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 -5 24 24"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </button>
            <div
              className={`w-8/12 py-2 w bg-gray-200 absolute my-2 rounded-md transition duration-700 ${
                toggle ? "hidden opacity-0" : "block opacity-100"
              }`}
            >
              <Link to="/searchcountry">
                <button
                  onClick={() => setToggle(!toggle)}
                  className="inline-flex w-full items-center text-gray-700  border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 hover:text-white   md:mt-0 duration-300 "
                >
                  Country
                </button>
              </Link>
              <Link to="/searchprovince">
                <button
                  onClick={() => setToggle(!toggle)}
                  className="inline-flex w-full items-center text-gray-700  border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 hover:text-white   md:mt-0 duration-300 "
                >
                  Provinces
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
