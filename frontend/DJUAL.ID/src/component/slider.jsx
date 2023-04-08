import React, { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ setToggel }) => {
  const [indexes, setIndex] = useState(0);
  const next = () => {
    const check = indexes === 0;
    const setIcon = check ? indexes + 1 : 0;
    setIndex(setIcon);
    setToggel(false);
  };
  const icon = [
    {
      close: (
        <svg
          className=" w-10 h-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
          />
        </svg>
      ),
    },
    {
      close: (
        <svg
          className=" w-10 h-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className=" bg-slate-900 flex flex-col pb-96 text-white p-3 pt-5 h-full gap-5">
      <div className=" flex flex-col font-alata gap-6">
        <div>
          <Link className=" bg-slate-600 p-2 rounded-lg" to="/">
            Beranda
          </Link>
        </div>
        <div>
          <Link className=" bg-slate-600 p-2 rounded-lg" to="/">
            Contact Us
          </Link>
        </div>
        <div>
          <Link className=" bg-slate-600 p-2 rounded-lg" to="/">
            About Us
          </Link>
        </div>
        <div className=" absolute bottom-16">
          <p>Copyright &copy; 2023</p>
          <p> Djamet Coder</p>
        </div>
      </div>
      <div onClick={next} className=" absolute right-3 top-3 cursor-pointer">
        {icon[indexes].close}
      </div>
      <div className=" bg-slate-900 h-96"></div>
    </div>
  );
};

export default Slider;
