import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import bir from "../../../public/bir.png"

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-80  z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
              THANK YOU
            </span>
          </div>
          <h2 className="text-lg font-semibold">Your order has been received</h2>

          <div className="mt-4 border-t pt-4 text-sm text-gray-600">
            <p><strong>Order Number:</strong> 1958687</p>
            <p><strong>Date:</strong> 15 Sep, 2021</p>
            <p><strong>Total:</strong> $2,699.00</p>
            <p><strong>Payment Method:</strong> Cash on delivery</p>
          </div>

          <div className="mt-4 border-t pt-4 text-left text-sm">
            <h3 className="font-semibold mb-2">Order Details</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={bir}
                    alt="Barberton Daisy"
                    className="w-12 h-12 rounded-lg"
                  />
                  <span>Barberton Daisy (x2)</span>
                </div>
                <span className="font-semibold text-green-600">$238.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={bir}
                    alt="Blushing Bromeliad"
                    className="w-12 h-12 rounded-lg"
                  />
                  <span>Blushing Bromeliad (x6)</span>
                </div>
                <span className="font-semibold text-green-600">$834.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={bir}
                    alt="Aluminum Plant"
                    className="w-12 h-12 rounded-lg"
                  />
                  <span>Aluminum Plant (x9)</span>
                </div>
                <span className="font-semibold text-green-600">$1,611.00</span>
              </div>

              <div className="flex justify-between border-t pt-2">
                <span>Shipping</span>
                <span className="font-semibold">$16.00</span>
              </div>

              <div className="flex justify-between border-t pt-2 text-lg font-semibold">
                <span>Total</span>
                <span className="text-green-700">$2,699.00</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Track your order
          </button>
        </div>
      </div>
    </div>
  );
}
