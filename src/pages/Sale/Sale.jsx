import React from 'react'
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



const Sale = () => {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={birinchi}
                  alt="Barberton Daisy"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Barberton Daisy</h3>
                  <p className="text-[#46A358] font-bold">$119.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className=" hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={ikkinchi}
                  alt="Angel Wing Begonia"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Angel Wing Begonia</h3>
                  <p className="text-[#46A358] font-bold">$169.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={uchinchi}
                  alt="African Violet"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">African Violet</h3>
                  <p className="text-[#46A358]">$199.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={vaza}
                  alt="Beach Spider Lily"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Beach Spider Lily</h3>
                  <p className="text-[#46A358]font-bold">$129.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className=" hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={beshinchi}
                  alt="Blushing Bromeliad"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Blushing Bromeliad</h3>
                  <p className="text-[#46A358] font-bold">$139.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={oltinchi}
                  alt="Aluminum Plant"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Aluminum Plant</h3>
                  <p className="text-[#46A358] font-bold">$179.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={yettinchi}
                  alt="Bird's Nest Fern"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Bird's Nest Fern</h3>
                  <p className="text-[#46A358] font-bold">$99.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={sakkizinchi}
                  alt="Broadleaf Lady Palm"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Broadleaf Lady Palm</h3>
                  <p className="text-[#46A358] font-bold">$59.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
        
              <div className="border bg-white rounded-lg overflow-hidden relative group">
                <img
                  src={oninchi}
                  alt="Chinese Evergreen"
                  className="w-[258px] h-[300px] object-cover mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-bold">Chinese Evergreen</h3>
                  <p className="text-[#46A358] font-bold">$39.00</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                  <CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
                </div>
              </div>
            </div>
  )
}

export default Sale;