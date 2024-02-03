import React from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";

const Information = ({ fName, lName, address, age, mail, phone }) => {
  return (
    <div className="flex flex-col  mt-14">
      <p className="text-2xl font-mono font-black">PERSONAL INFORMATION</p>
      <div className="flex flex-row mt-4 justify-between">
        <div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">First Name:</p>
            <p className="text-xl font-mono font-extralight">{fName}</p>
          </div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">Last Name:</p>
            <p className="text-xl font-mono font-extralight">{lName}</p>
          </div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">Age:</p>
            <p className="text-xl font-mono font-extralight">{age}</p>
          </div>
        </div>
        <div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">Mail:</p>
            <p className="text-xl font-mono font-extralight">{mail}</p>
          </div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">Phone:</p>
            <p className="text-xl font-mono font-extralight">{phone}</p>
          </div>
          <div className="flex my-2">
            <p className="text-xl font-mono font-black">Address:</p>
            <p className="text-xl font-mono font-extralight">{address}</p>
          </div>
        </div>
      </div>
      <p className="mt-14 text-2xl font-mono font-black">INTEREST</p>
      <div className="flex flex-row justify-around mt-4 mb-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"travel"} style={"h-16 w-16"} alt={"Travel"} />
          </div>
          <p className="text-xl font-mono font-extralight">Travel</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo
              image={"photography"}
              style={"h-16 w-16"}
              alt={"Photography"}
            />
          </div>
          <p className="text-xl font-mono font-extralight">Photography</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"book"} style={"h-16 w-16"} alt={"Learn"} />
          </div>
          <p className="text-xl font-mono font-extralight">Learn</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"hiking"} style={"h-16 w-16"} alt={"Hiking"} />
          </div>
          <p className="text-xl font-mono font-extralight">Hiking</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"gaming"} style={"h-16 w-16"} alt={"Gaming"} />
          </div>
          <p className="text-xl font-mono font-extralight">Gaming</p>
        </div>
      </div>

      <p className="mt-14 text-2xl font-mono font-black">KNOWLEDGE</p>
      <div className="flex flex-row justify-around mt-4 mb-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"cplus"} style={"h-14 w-14"} alt={"C++"} />
          </div>
          <p className="text-xl font-mono font-extralight">C++</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"java"} style={"h-14 w-14"} alt={"Java"} />
          </div>
          <p className="text-xl font-mono font-extralight">Java</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"js"} style={"h-14 w-14"} alt={"Java Script"} />
          </div>
          <p className="text-xl font-mono font-extralight">Js</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"python"} style={"h-14 w-14"} alt={"Python"} />
          </div>
          <p className="text-xl font-mono font-extralight">Python</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"database"} style={"h-14 w-14"} alt={"Database"} />
          </div>
          <p className="text-xl font-mono font-extralight">Data Base</p>
        </div>
      </div>

      <div className="flex flex-row justify-around mt-4 mb-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"html"} style={"h-14 w-14"} alt={"HTML"} />
          </div>
          <p className="text-xl font-mono font-extralight">HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"css"} style={"h-14 w-14"} alt={"CSS"} />
          </div>
          <p className="text-xl font-mono font-extralight">CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"next"} style={"h-14 w-14"} alt={"Next"} />
          </div>
          <p className="text-xl font-mono font-extralight">Next</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"react"} style={"h-14 w-14"} alt={"React"} />
          </div>
          <p className="text-xl font-mono font-extralight">React</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white rounded-full justify-center items-center h-24 w-24 border-2 border-slate-300 mb-2 hover:bg-[#E5E5E5]">
            <Photo image={"node"} style={"h-14 w-14"} alt={"Node"} />
          </div>
          <p className="text-xl font-mono font-extralight">NodeJs</p>
        </div>
      </div>
    </div>
  );
};

Information.propTypes = {
  fName: PropTypes.string,
  lName: PropTypes.string,
  address: PropTypes.string,
  age: PropTypes.string,
  mail: PropTypes.string,
  phone: PropTypes.string,
};

export default Information;
