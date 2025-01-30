import React from "react";
import vaza from "../../../public/vaza.png"

const PlantCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 p-6">
      <div
        className="flex flex-col md:flex-row items-center bg-[#FBFBFB] rounded-lg shadow-md "
        style={{ width: "586px", height: "250px" }}
      >
        <div className="w-[50%] h-full">
          <img
            className="w-full h-full object-cover rounded-l-lg"
            src={vaza}
          />
        </div>
        <div className="w-[50%] p-6 flex flex-col justify-center ">
          <h3 className="text-xl font-bold mb-2">SUMMER CACTUS & SUCCULENTS</h3>
          <p className="text-gray-600 mb-4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <a
            href="#"
            className="inline-block bg-[#46A358] text-white py-2 px-4 rounded-xl hover:bg-green-600 text-center"
          >
            Find More →
          </a>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center bg-[#FBFBFB] shadow-md rounded-lg"
        style={{ width: "586px", height: "250px" }}
      >
        <div className="w-[50%] h-full">
          <img
           src={vaza}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-[50%] p-6 flex flex-col  justify-center">
          <h3 className="text-xl font-bold mb-2">STYLING TRENDS & MUCH MORE</h3>
          <p className="text-gray-600 mb-4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <a
            href="#"
            className="inline-block bg-[#46A358] text-white py-2 px-4 hover:bg-green-600 text-center rounded-xl"
          >
            Find More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlantCards;