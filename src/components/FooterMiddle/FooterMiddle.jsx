import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const FooterMiddle = () => {
  return (
    <div className="bg-green-100 py-6 px-4 mt-12 rounded-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <h3 className="font-bold text-green-600 text-lg">GREENSHOP</h3>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <MdLocationOn className="text-green-600 w-6 h-6" />
          <p className="text-gray-600 text-sm">70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <MdEmail className="text-green-600 w-6 h-6" />
          <p className="text-gray-600 text-sm">contact@greenshop.com</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <MdPhone className="text-green-600 w-6 h-6" />
          <p className="text-gray-600 text-sm">+88 01911 717 490</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
