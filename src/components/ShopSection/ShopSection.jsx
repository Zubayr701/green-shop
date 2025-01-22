import React from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Sidebar from "../Sidebar/Sidebar";

const ShopSection = () => (
  <section className="mt-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Sidebar />
      <ProductGrid />
    </div>
  </section>
);

export default ShopSection;
