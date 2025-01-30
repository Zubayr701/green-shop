import React from "react";
import { NavLink } from "react-router-dom";
import one from "../../../public/one.png"
import two from "../../../public/two.png"
import three from "../../../public/three.png"
import four from "../../../public/four.png"


const BlogPosts = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Blog Posts</h2>
        <p className="text-gray-600">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow-md overflow-hidden">
          <img src={one}  className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">
              September 12 | Read in 6 minutes
            </p>
            <h3 className="text-lg  mb-2">Cactus & Succulent Care Tips</h3>
            <p className="text-gray-600 mb-4">
              Cacti are succulents that are easy care plants for any home or patio.
            </p>
            <NavLink href="#" className=" hover:underline">
              Read More →
            </NavLink>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img src={two} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">
              September 13 | Read in 2 minutes
            </p>
            <h3 className="text-lg mb-2">Top 10 Succulents for Your Home</h3>
            <p className="text-gray-600 mb-4">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <NavLink href="#" className=" hover:underline">
              Read More →
            </NavLink>
          </div>
        </div>

        <div className="bg-white shadow-md  overflow-hidden">
          <img src={three} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">
              September 15 | Read in 3 minutes
            </p>
            <h3 className="text-lg mb-2">Cacti & Succulent Care Tips</h3>
            <p className="text-gray-600 mb-4">
              Cacti and succulents thrive in containers and because most are..
            </p>
            <NavLink href="#" className="hover:underline">
              Read More →
            </NavLink>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden">
          <img src={four}  className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-2">
              September 15 | Read in 2 minutes
            </p>
            <h3 className="text-lg mb-2">Best Houseplants Room By Room</h3>
            <p className="text-gray-600 mb-4">
              The benefits of houseplants are endless. In addition to..
            </p>
            <NavLink href="#" className="hover:underline">
              Read More →
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
