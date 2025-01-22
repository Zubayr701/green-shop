import React from "react";
import img from "./../../../public/vaza.png"

const Carousel = () => {
  return (
    <div className="bg-gray-100  flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 rounded-lg">
      
      <div className="text-center lg:text-left max-w-lg">
        <p className="text-gray-500 uppercase tracking-widest font-medium">
          Welcome to GreenShop
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
          LET'S MAKE A <span className="text-green-500">BETTER PLANET</span>
        </h1>
        <p className="mt-4 text-gray-600">
          We are an online plant shop offering a wide range of cheap and trendy plants.
          Use our plants to create a unique Urban Jungle. Order your favorite plants!
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600">
          SHOP NOW
        </button>
      </div>

      <div className="mt-10 lg:mt-0 flex justify-center">
        <div className="relative">
          <img
            src={img}
            alt="Plant"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
