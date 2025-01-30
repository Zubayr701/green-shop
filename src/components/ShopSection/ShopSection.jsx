import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Ad from "../Ad/Ad";
import ProductGrid from "../ProductGrid/ProductGrid";
import { NavLink, Outlet } from "react-router-dom";
import Arrivals from "../../pages/Arrivals/Arrivals";
import Sale from "../../pages/Sale/Sale";

const ShopSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 flex flex-col">
        <Sidebar />
        <Ad />
      </div>
      
      <div className="flex-1">
        <nav className="flex justify-between items-center border-b p-4 bg-gray-100">
          <div className="space-x-4">
            <NavLink to="" className="text-gray-600 font-medium hover:text-black">
              All Plants
            </NavLink>
            <NavLink to="arrivals" className="text-gray-600 font-medium hover:text-black">
              New Arrivals
            </NavLink>
            <NavLink to="sale" className="text-gray-600 font-medium hover:text-black">
              Sale
            </NavLink>
          </div>
          <div>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-gray-600"
            >
              <option>Default sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </nav>
        
      <Outlet/>
       
        <div className="flex justify-center items-center space-x-2 mt-6 ml-80">
      <button className="px-3 py-1 bg-gray-200 hover:bg-green-600 rounded">1</button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-green-600 rounded">2</button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-green-600 rounded">3</button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-green-600 rounded">4</button>
      <button className="px-3 py-1 bg-gray-200 hover:bg-green-600 rounded">{">"}</button>
    </div>
      </div>
    </div>
  );
};

export default ShopSection;