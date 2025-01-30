import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductTabs = () => {
  return (
    <div className="container mx-auto p-4">
       <div className="">
        <NavLink
          to="description"
          className={({ isActive }) =>
            isActive ? "text-[#46A358] underline" : ""
          }
        >
          Product Description
        </NavLink>
        <NavLink
  to="reviews"
  className={({ isActive }) =>
    isActive
      ? "text-[#46A358] underline ml-[10px]" 
      : "ml-[10px]" 
  }
>
  Reviews (19)
</NavLink>



      </div>
      <br />
   
      <Outlet/>
    </div>
  );
};

export default ProductTabs;