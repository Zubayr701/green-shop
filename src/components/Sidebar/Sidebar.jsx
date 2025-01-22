import React from "react";

const Sidebar = () => (
  <aside className="bg-white p-4 rounded shadow-md">
    <h2 className="text-lg font-bold">Categories</h2>
    <ul className="mt-4 space-y-2">
      {[
        "House Plants",
        "Potted Plants",
        "Seeds",
        "Small Plants",
        "Big Plants",
      ].map((category, index) => (
        <li key={index} className="text-gray-600 hover:text-green-600">
          {category}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
