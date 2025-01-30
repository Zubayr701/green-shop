// import React from "react";

// const Sidebar = () => {
//   return (
//     <div className="p-4 bg-gray-100 h-auto md:h-full">
//       <h2 className="font-bold text-lg mb-4">Categories</h2>
//       <ul className="space-y-2">
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">House Plants</span>
//           <span className="text-gray-500">(33)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Potter Plants</span>
//           <span className="text-gray-500">(12)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Seeds</span>
//           <span className="text-gray-500">(45)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Small Plants</span>
//           <span className="text-gray-500">(29)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Big Plants</span>
//           <span className="text-gray-500">(23)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Succulents</span>
//           <span className="text-gray-500">(19)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Terrariums</span>
//           <span className="text-gray-500">(17)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Gardening</span>
//           <span className="text-gray-500">(13)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Accessories</span>
//           <span className="text-gray-500">(18)</span>
//         </li>
//       </ul>

//       <h2 className="font-bold text-lg mt-6 mb-4">Price Range</h2>
//       <div className="flex items-center space-x-2">
//         <input
//           type="range"
//           min="39"
//           max="1230"
//           className="w-full"
//         />
//         <span className="text-gray-600">$39 - $1230</span>
//       </div>

//       <h2 className="font-bold text-lg mt-6 mb-4">Size</h2>
//       <ul className="space-y-2">
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Small</span>
//           <span className="text-gray-500">(119)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Medium</span>
//           <span className="text-gray-500">(86)</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-600">Large</span>
//           <span className="text-gray-500">(78)</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { Range } from "react-range";


const Sidebar = () => {
  const [minPrice, setMinPrice] = useState(39);
  const [maxPrice, setMaxPrice] = useState(1230);
  const [priceRange, setPriceRange] = useState([39, 1230]);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    if (event.target.name === "min") {
      setPriceRange([value, Math.max(value, priceRange[1])]);
    } else {
      setPriceRange([Math.min(value, priceRange[0]), value]);
    }
  };

  return (
    <div className="p-4 bg-gray-100 h-auto md:h-full">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span className="text-gray-600">House Plants</span>
          <span className="text-gray-500">(33)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Potter Plants</span>
          <span className="text-gray-500">(12)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Seeds</span>
          <span className="text-gray-500">(45)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Small Plants</span>
          <span className="text-gray-500">(29)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Big Plants</span>
          <span className="text-gray-500">(23)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Succulents</span>
          <span className="text-gray-500">(19)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Terrariums</span>
          <span className="text-gray-500">(17)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Gardening</span>
          <span className="text-gray-500">(13)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Accessories</span>
          <span className="text-gray-500">(18)</span>
        </li>        
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4">Price Range</h2>
      <div className="space-y-4">

      <div className="mb-4">
          <Range
            values={[minPrice, maxPrice]}
            step={1}
            min={39}
            max={1230}
            onChange={(values) => {
              setMinPrice(values[0]);
              setMaxPrice(values[1]);
            }}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "2px",
                  backgroundColor: "#46A358",
                  borderRadius: "2px",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#46A358",
                }}
              />
            )}
          />
        </div>

        <p className="text-sm text-gray-600 mb-2">
          Price:{" "}
          <span className="font-semibold text-gray-800">
            ${minPrice} - ${maxPrice}
          </span>
        </p>

      
        <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Filter
        </button>
      </div>

      <h2 className="font-bold text-lg mt-6 mb-4">Size</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Small</span>
          <span className="text-gray-500">(119)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Medium</span>
          <span className="text-gray-500">(86)</span>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-gray-600">Large</span>
          <span className="text-gray-500">(78)</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
