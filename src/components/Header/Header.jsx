import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import logo from "../../../public/greenshop.png"
import Modal from "../Modal/Modal";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center flex-wrap">
        <div className="text-green-500 text-2xl font-bold ml-24">
          GREENSHOP
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg border-b-2 border-green-500 pb-1"
                : "text-gray-600 hover:text-green-500 text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg border-b-2 border-green-500 pb-1"
                : "text-gray-600 hover:text-green-500 text-lg"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/plant-care"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg border-b-2 border-green-500 pb-1"
                : "text-gray-600 hover:text-green-500 text-lg"
            }
          >
            Plant Care
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 text-lg border-b-2 border-green-500 pb-1"
                : "text-gray-600 hover:text-green-500 text-lg"
            }
          >
            Blogs
          </NavLink>
        </nav>
        <div className="flex space-x-4 items-center">
          <FaSearch className="text-gray-600 hover:text-green-500 cursor-pointer text-xl" />
          <NavLink to="/shopcard">
            <FaShoppingCart className="text-gray-600 hover:text-green-500 cursor-pointer text-xl" />
          </NavLink>

          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Header;
