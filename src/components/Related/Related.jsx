import React from "react";
import vaza from "../../../public/vaza.png"

const RelatedProducts = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold text-green-600 mb-4 border-b">Related Products</h2>
      <br />
      <div className="grid grid-cols-5 gap-4">
        <div className="p-4 border rounded-lg text-center">
          <img src={vaza} className="w-full mb-4" />
          <p className="text-gray-800 font-semibold">Beach Spider Lily</p>
          <p className="text-green-600 font-bold">$129.00</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src={vaza}  className="w-full mb-4" />
          <p className="text-gray-800 font-semibold">Blushing Bromeliad</p>
          <p className="text-green-600 font-bold">$139.00</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src={vaza} alt="Aluminum Plant" className="w-full mb-4" />
          <p className="text-gray-800 font-semibold">Aluminum Plant</p>
          <p className="text-green-600 font-bold">$179.00</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src={vaza} alt="Bird's Nest Fern" className="w-full mb-4" />
          <p className="text-gray-800 font-semibold">Bird's Nest Fern</p>
          <p className="text-green-600 font-bold">$99.00</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src={vaza} alt="Chinese Evergreen" className="w-full mb-4" />
          <p className="text-gray-800 font-semibold">Chinese Evergreen</p>
          <p className="text-green-600 font-bold">$39.00</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
