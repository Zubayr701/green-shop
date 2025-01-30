  import React from 'react'
  
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

      <button className="w-full bg-green-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-green-700">
        Place Order
      </button>
    </div>
    )
  }
  
  export default Payment;
  