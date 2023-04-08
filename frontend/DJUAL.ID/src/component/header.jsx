import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import data from "../../data";

const Header = ({ setToggel }) => {
  const icon = [
    {
      icon: (
        <svg
          className=" w-7 h-7 md:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          className=" w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 012 10z"
          />
        </svg>
      ),
    },
  ];

  const [currentIndex, setIndex] = useState(0);
  const handleChange = () => {
    const isStart = currentIndex === 0;
    const next = isStart ? icon.length - 1 : 0;
    setIndex(next);
    setToggel(true);
  };
  return (
    <div className=" bg-slate-700 text-slate-100/80 p-7 max-sm:h-14 h-32 flex justify-between">
      <div className=" flex justify-between">
        <div className=" flex">
          <div className=" flex flex-col justify-center">
            <h1 className=" font-alata text-4xl max-sm:text-xl">DJUAL.ID</h1>
          </div>
          <div className=" flex flex-col justify-center pr-7">
            <div>
              <svg
                className=" w-10 max-sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-3 max-sm:hidden justify-between">
        <div className=" flex flex-col font-alata justify-center text-2xl">
          <div className=" flex gap-3">
            <a className=" bg-slate-600/60 p-3 rounded-xl" href="#">
              Beranda
            </a>
            <a className=" bg-slate-600/60 p-3 rounded-xl" href="#">
              Beli Sesuatu
            </a>
            <a className=" bg-slate-600/60 p-3 rounded-xl" href="#">
              About Us
            </a>
          </div>
        </div>
      </div>
      <div className=" flex justify-center md:hidden gap-2">
        <div className=" flex flex-col justify-center">
          <input
            className=" p-2 bg-slate-600 rounded-lg placeholder:text-white/60 placeholder:font-alata focus:outline-none focus:text-white/60"
            type="text"
            placeholder="ketikan barang"
          />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" cursor-pointer" onClick={handleChange}>
            {icon[currentIndex].icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
