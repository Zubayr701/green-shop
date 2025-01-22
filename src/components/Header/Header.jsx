import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center flex-wrap">
        <div className="text-green-500 text-2xl font-bold">GREENSHOP</div>

        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-600 hover:text-green-500 text-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-gray-600 hover:text-green-500 text-lg"
          >
            Shop
          </NavLink>
          <NavLink
            to="/plant-care"
            className="text-gray-600 hover:text-green-500 text-lg"
          >
            Plant Care
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-gray-600 hover:text-green-500 text-lg"
          >
            Blogs
          </NavLink>
        </nav>

        <div className="flex space-x-4 items-center">
          <FaSearch className="text-gray-600 hover:text-green-500 cursor-pointer text-xl" />
          <FaShoppingCart className="text-gray-600 hover:text-green-500 cursor-pointer text-xl" />

          <NavLink
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-lg font-medium flex items-center gap-2"
          >
            <IoExitOutline className="text-xl" />
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
