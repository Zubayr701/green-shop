import React from 'react'

const ProductGrid = () => {
  return (
    <div>
  <div className="col-span-3">
    <h2 className="text-lg font-bold">All Plants</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <div className="bg-white p-4 rounded shadow-md text-center">
        <div className="bg-gray-200 h-32 mb-4"></div>
        <h3 className="text-lg font-bold">Barberton Daisy</h3>
        <p className="text-green-600 font-bold">$119</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md text-center">
        <div className="bg-gray-200 h-32 mb-4"></div>
        <h3 className="text-lg font-bold">Angel Wing Begonia</h3>
        <p className="text-green-600 font-bold">$190</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md text-center">
        <div className="bg-gray-200 h-32 mb-4"></div>
        <h3 className="text-lg font-bold">African Violet</h3>
        <p className="text-green-600 font-bold">$99</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProductGrid
