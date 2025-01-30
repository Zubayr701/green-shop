import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiPaypal, SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

const FooterBottom = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 text-gray-600">
        <div>
          <h3 className="font-bold">My Account</h3>
          <ul className="mt-2 space-y-1">
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Help & Guide</h3>
          <ul className="mt-2 space-y-1">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Categories</h3>
          <ul className="mt-2 space-y-1">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social Media</h3>
          <div className="flex space-x-4 mt-2 text-green-500">
            <FaFacebookF className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
            <FaYoutube className="w-6 h-6" />
          </div>
          <h3 className="font-bold mt-6">We accept</h3>
          <div className="flex space-x-4 mt-2 text-gray-600">
            <SiPaypal className="w-8 h-8" />
            <SiVisa className="w-8 h-8" />
            <SiMastercard className="w-8 h-8" />
            <SiAmericanexpress className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-500 text-sm">
        2025 GreenShop. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterBottom;
