import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hamburger() {
  const [press, setPress] = useState(false);

  const handleClick = () => {
    setPress(!press);
  };

  return (
    <div className="relative">
      <div>
        <div
          className={`flex absolute bg-white w-[300px] h-screen mt-[-8px] ml-[-237px] z-20 flex-col justify-evenly items-center transition-all duration-[1s] origin-right ${
            press ? `` : `translate-x-[19rem]`
          }`}
        >
          <Link
            to="/"
            className="text-4xl font-black text-[#909090] hover:text-black transition-all duration-[.5s]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-4xl font-black text-[#909090] hover:text-black transition-all duration-[.5s]"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-4xl font-black text-[#909090] hover:text-black transition-all duration-[.5s]"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="text-4xl font-black text-[#909090] hover:text-black transition-all duration-[.5s]"
          >
            Contact
          </Link>
        </div>

        <div
          className={`flex absolute bg-black w-screen h-screen hidden z-10 mt-[-8px] transition-all origin-right opacity-80 sm:block sm:ml-[-833px] md:ml-[-1000px] lg:ml-[-1052px] ${
            press ? `duration-[1.5s]` : `translate-x-[79rem] duration-[1s]`
          }`}
        ></div>
      </div>

      <button
        type="button"
        className="relative flex flex-col justify-center items-center gap-2.5 w-12 h-12 bg-transparent z-40"
        onClick={handleClick}
      >
        <div
          className={`bg-black h-0.5 w-[70%] rounded transition-all duration-[.5s] origin-left ${
            press ? `rotate-45` : ""
          } `}
        ></div>
        <div
          className={`bg-black h-0.5 w-[70%] rounded transition-all duration-[.5s] origin-left ${
            press ? `opacity-0` : ""
          } `}
        ></div>
        <div
          className={`bg-black h-0.5 w-[70%] rounded transition-all duration-[.5s] origin-left ${
            press ? `-rotate-45` : ""
          }`}
        ></div>
      </button>
    </div>
  );
}

export default Hamburger;
