import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShopCard from "../../pages/ShopCard/ShopCard";

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-6 max-w-lg mx-auto  bg-white ">
      <h1 className="text-2xl">Barberton Daisy</h1>
      <p className="text-green-600 text-lg font-semibold">$119.00</p>

      <div className="flex items-center gap-2 my-2">
        <div className="flex text-yellow-400">
          {"★".repeat(4)}
          {"☆".repeat(1)}
        </div>
        <p className="text-sm text-gray-500">(19 Customer Review)</p>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Short Description: The ceramic cylinder planters come with a wooden
        stand to help elevate your plants off the ground.
      </p>

      <h2 className="text-sm mb-2">Size:</h2>
      <div className="flex gap-2 mb-4">
        {["S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-4 py-2 rounded-lg border ${
              selectedSize === size
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            } hover:bg-green-500 hover:text-white transition`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={decrementQuantity}
          className="w-8 h-8 flex justify-center items-center border rounded-full text-gray-700 hover:bg-green-500 hover:text-white transition"
        >
          -
        </button>
        <p className="text-lg font-bold">{quantity}</p>
        <button
          onClick={incrementQuantity}
          className="w-8 h-8 flex justify-center items-center border rounded-full text-gray-700 hover:bg-green-500 hover:text-white transition"
        >
          +
        </button>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 px-4 py-2 bg-white text-green-500 border rounded-lg hover:bg-green-600 hover:text-white transition">
          Buy Now
        </button>
        <NavLink className="flex-1 text-center px-4 py-2 bg-white border rounded-lg text-green-500 hover:bg-green-500 hover:text-white transition">
          Add to Cart
        </NavLink>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>
          <span className="font-semibold">SKU:</span> 199571877966
        </p>
        <p>
          <span className="font-semibold">Categories:</span> Potter Plants
        </p>
        <p>
          <span className="font-semibold">Tags:</span> Home, Garden, Plants
        </p>
      </div>

      <div className="mt-4 flex gap-4 items-center">
        <p className="text-sm font-semibold">Share this product:</p>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-green-500 transition">
            F
          </button>
          <button className="text-gray-500 hover:text-green-500 transition">
            T
          </button>
          <button className="text-gray-500 hover:text-green-500 transition">
            I
          </button>
          <button className="text-gray-500 hover:text-green-500 transition">
            G
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
