import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import LocalTime from "./LocalTime";

function Greet() {
  return (
    <div className="text-center  my-62.5 lg:my-87.5 flex flex-col gap-4 tracking-tight">
      <h1 className="text-7xl font-bold text-white ">Callum Govender</h1>
      <p className="text-2xl text-gray-300 mt-4">
        Junior Web Developer / Frontend Developer
      </p>
      <div className="flex gap-1 mx-auto w-max mt-4">
        <p className=" text-white text-lg justify-center items-center border-2 border-gray-800 rounded-full px-4 py-2   mt-4  hover:border-[#A8C5E8] transition-all duration-300">
          <MapPin className="inline-block mr-1 text-white" size={18} />
          Durban, South Africa
          <Image
            src="/sa.png"
            alt="South Africa Flag"
            width={20}
            height={14}
            className="ml-1 inline-block"
          />
        </p>
        <div className=" text-white text-lg  justify-center items-center border-2 border-gray-800 rounded-full px-4 py-2   mt-4  hover:border-[#A8C5E8] transition-all duration-300">
          <LocalTime />
        </div>
      </div>
      <div className=" flex gap-2.5 mx-auto my-8">
        <button className="text-[#A8C5E8] w-50 border-2 rounded-lg py-3 hover:bg-[#A8C5E8] hover:text-black transition duration-300 cursor-pointer  flex justify-center gap-1">
          <a href="#projects"> View Projects</a>
          <ArrowRight />
        </button>
        <a
          href="/callumGovenderCV.docx"
          download="callumGovenderCV.docx"
          className="text-[#F5A3A3] w-50 border-2 rounded-lg py-3  hover:bg-[#F5A3A3] hover:text-black transition duration-300 inline-block"
        >
          CV
        </a>
      </div>
    </div>
  );
}

export default Greet;
