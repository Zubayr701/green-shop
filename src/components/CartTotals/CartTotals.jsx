import { Link, NavLink } from "react-router-dom";

export default function CartTotals() {
  return (
    <div className="w-80   p-5 rounded-lg bg-white font-sans mt-20">
      <h3 className="mb-4 text-lg font-bold text-gray-800">Cart Totals</h3>
      <div className="flex mb-5">
        <input
          type="text"
          placeholder="Enter coupon code here..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md text-sm"
        />
        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-r-md">
          Apply
        </button>
      </div>
      <div className="mb-5">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Subtotal</span>
          <span>$2,683.00</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Coupon Discount</span>
          <span>(-) $0.00</span>
        </div>
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Shipping</span>
          <span>
            $16.00 <Link href="#" className="text-blue-600">View shipping charge</Link>
          </span>
        </div>
        <div className="flex justify-between text-sm font-bold text-green-600">
          <span>Total</span>
          <span>$2,699.00</span>
        </div>
      </div>
      <NavLink to="/checkout"
  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-base font-bold rounded-md mb-3 transition duration-300 ease-in-out shadow-lg flex justify-center items-center"
>
  Proceed To Checkout
</NavLink>

      <Link href="#" className="block text-center text-green-600 text-sm">
        Continue Shopping
      </Link>
    </div>
  );
}




