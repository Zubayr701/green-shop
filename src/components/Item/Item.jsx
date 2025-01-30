import React from 'react'

export default function Item({ name, price }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full">
        <div className="border bg-white rounded-lg overflow-hidden relative group">
          <div className="w-full h-[300px] flex justify-center items-center bg-white">
            <img
              src={birinchi}
              alt="Barberton Daisy"
              className="h-full object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">{name}</h3>
            <p className="text-gray-600">{price}</p>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
            <CiSearch className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
            <CiHeart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" />
            <NavLink to="/shop"><CiShoppingCart className="hover:text-green-300 text-white cursor-pointer text-2xl mx-2" /></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
