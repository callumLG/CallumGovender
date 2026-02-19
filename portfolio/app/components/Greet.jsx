import React from "react";

function Greet() {
  return (
    <div className="text-center  my-50 flex flex-col gap-4">
      <h1 className="text-7xl font-bold text-white">Callum Govender</h1>
      <p className="text-2xl text-gray-300 mt-4">
        Junior Web Developer / Frontend Developer
      </p>
      <div className=" flex gap-2.5 mx-auto my-8">
        <button className="text-[#A8C5E8] w-50 border-2 rounded-lg py-3 hover:bg-[#A8C5E8] hover:text-black transition duration-300">
          View Projects
        </button>
        <button className="text-[#F5A3A3] w-50 border-2 rounded-lg py-3  hover:bg-[#F5A3A3] hover:text-black transition duration-300">
          CV
        </button>
      </div>
    </div>
  );
}

export default Greet;
