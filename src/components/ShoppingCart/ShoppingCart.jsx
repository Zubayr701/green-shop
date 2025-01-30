import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import rasm from "../../../public/one.png";

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Barberton Daisy",
      sku: "1995751877966",
      price: 119.0,
      quantity: 1,
      image: rasm,
    },
    {
      id: 2,
      name: "Blushing Bromeliad",
      sku: "1995751877965",
      price: 139.0,
      quantity: 1,
      image: rasm,
    },
    {
      id: 3,
      name: "Aluminum Plant",
      sku: "1995751877964",
      price: 179.0,
      quantity: 1,
      image: rasm,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <div className="gap-20 mt-12 w-full" > 
      <p className="mb-5 ml-10 font-sans">Home / Shop / Shopping Cart</p>
      <div className="w-[922px] ml-[40px] grid grid-cols-4 border-b border-gray-200 py-2 text-gray-700 font-semibold">
      <span>Products</span>
      <span className="text-">Price</span>
      <span className="">Quantity</span>
      <span className="text-right">Total</span>
    </div>
      <div className=" p-5 bg-white rounded-lg">
        <ul className="list-none p-0">

          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-3  bg-gray-100 rounded-lg p-4 shadow-md mb-5"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover shadow-md mr-4"
                />
                <div className="flex flex-col">
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                </div>
              </div>
              <p className="w-20 text-center font-semibold text-gray-700">${item.price.toFixed(2)}</p>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 bg-green-500 text-white font-bold rounded-lg shadow"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
                <button
                  className="w-8 h-8 bg-green-500 text-white font-bold rounded-lg shadow"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="w-20 text-center font-bold text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button className="w-8 h-8 text-red-500 hover:text-red-700">
                <AiFillDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
