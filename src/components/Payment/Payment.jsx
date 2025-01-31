import React from 'react'
import { NavLink } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="bg-white p-6 rounded-lg border mb-2">
      <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
      <div className="space-y-2">
        <div className="flex items-center">
          <input type="radio" name="payment" id="paypal" className="mr-2" />
          <label htmlFor="paypal">PayPal / Credit Card</label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="payment" id="bank" className="mr-2" />
          <label htmlFor="bank">Direct Bank Transfer</label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="payment" id="cash" className="mr-2" defaultChecked />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
      </div>
      <NavLink to="/order-modal"
        className="inline-block w-full text-center pt-[10px] pb-[10px] rounded-lg bg-green-600 text-white font-bold mt-4 hover:bg-green-700 custom-style"
      >
        Place Order
      </NavLink>




    </div>
  )
}

export default Payment;
