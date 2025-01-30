import React from "react";
import bir from "../../../public/bir.png"

const ProductGallery = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-8 gap-4 lg:gap-8">
      <div className="flex flex-row lg:flex-col gap-2">
        <img
          src={bir}
          alt="Thumbnail 1"
          className="w-20 h-20 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-green-500"
        />
        <img
          src={bir}
          alt="Thumbnail 2"
          className="w-20 h-20 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-green-500"
        />
        <img
          src={bir}
          alt="Thumbnail 3"
          className="w-20 h-20 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-green-500"
        />
        <img
          src={bir}
          alt="Thumbnail 4"
          className="w-20 h-20 object-cover rounded-lg border border-gray-300 cursor-pointer hover:border-green-500"
        />
      </div>

      <div className="flex-1 max-w-lg">
        <img
          src={bir}
          alt="Main Product"
          className="w-[404px]  h-[404px] object-cover "
        />
      </div>
    </div>
  );
};

export default ProductGallery;
