import React from "react";
import spsale from "../../../public/spsale.png"; 
import vaza from "../../../public/vaza.png"; 

const Ad = () => {
  return (
    <div className="bg-green-100 p-6 text-center rounded-lg shadow-md">
      <div className="mb-4">
        <img src={spsale} alt="Super Sale" className="mx-auto w-3/4 object-contain" />
      </div>
      <p className="text-gray-600 text-xl mb-4">UP TO 75% OFF</p>
      <div className="flex justify-center">
        <img src={vaza} alt="Plant Vase" className=" object-contain" />
      </div>
    </div>
  );
};

export default Ad;
