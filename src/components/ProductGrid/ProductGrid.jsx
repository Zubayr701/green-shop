import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import birinchi from "./../../../public/birinchi.png";
import ikkinchi from "./../../../public/ikkinchi.png";
import uchinchi from "./../../../public/uchinchi.png";
import vaza from "./../../../public/vaza.png";
import beshinchi from "./../../../public/beshinchi.png";
import oltinchi from "./../../../public/oltinchi.png";
import yettinchi from "./../../../public/yettinchi.png";
import sakkizinchi from "./../../../public/sakkizinchi.png";
import oninchi from "./../../../public/oninchi.png";
import { NavLink, useLoaderData } from "react-router-dom";
import Shop from "../../pages/Shop/Shop";
import { API } from "../../utils/config";

const ProductGrid = () => {
  const [plant, setPlant] = useState(null)

  useEffect(() => {
    API.get("/flowers").then((res) => setPlant(res.data))
  })

  return (
    <div className="flex flex-col md:flex-row">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full">
        {
          plant?.map((data) => {
            return (
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <div className="w-full h-[300px] flex justify-center items-center bg-white">
                  <img
                    src={birinchi}
                    alt="Barberton Daisy"
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{data?.name}</h3>
                  <p className="text-gray-600">${data?.price}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <NavLink to="/shop"><CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" /></NavLink>
                </div>
              </div>
            )
          })
        }
{/* 
        {[beshinchi, oltinchi, yettinchi, sakkizinchi, oninchi].map(
          (rasm, idx) => (
            <div
              key={idx}
              className="border bg-white rounded-lg overflow-hidden relative group"
            >
              <div className="w-full h-[300px] flex justify-center items-center bg-white">
                <img src={rasm} alt={`Mahsulot ${idx + 5}`} className="h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Product {idx + 5}</h3>
                <p className="text-gray-600">${99 + idx * 20}.00</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                <NavLink to="/shop"><CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" /></NavLink>
              </div>
            </div>
          )
        )} */}
      </div>
    </div>
  );
};

export default ProductGrid;
