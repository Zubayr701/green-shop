import rasm from "../../../public/bir.png";

export default function OrderSummary() {
  return (
    <div className="p-6 font-sans">
      <div className="text-xl font-bold">Your Order</div>
      <div className="mt-4">
        <p className="mb-5 ml-0 font-bold border-b">Products / Subtotal</p>

        <div className="flex justify-between mb-2 items-center border bg-[#FBFBFB] p-4 rounded-lg">
  <img src={rasm} alt="Barberton Daisy" className="w-12 h-12  object-cover mr-4" />
  <span>Barberton Daisy x 2</span>
  <span>$476.00</span>
</div>

<div className="flex justify-between mb-2 items-center border bg-[#FBFBFB] p-4 rounded-lg">
  <img src={rasm} alt="Blushing Bromeliad" className="w-12 h-12 object-cover mr-4" />
  <span>Blushing Bromeliad x 6</span>
  <span>$5004.00</span>
</div>

<div className="flex justify-between mb-2 items-center bg-[#FBFBFB] border p-4 rounded-lg">
  <img src={rasm} alt="Aluminum Plant" className="w-12 h-12 object-cover mr-4" />
  <span>Aluminum Plant x 9</span>
  <span>$14499.00</span>
</div>

        <span className="text-green-500 ml-[200px]">Have a coupon code? Click here</span>
      </div>
<br />
      <div className="pt-4 mt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$20008.00</span>
        </div>
        <div className="flex justify-between">
          <span>Counpon Discount</span>
          <span>00.00</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Shiping</span>
          <span>$16.00</span>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 mt-4">
  
      <h1 >Total $2,699.00</h1>
</div>

    </div>
  );
}
