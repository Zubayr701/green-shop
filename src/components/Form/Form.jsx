import Input from "../Input/Input";

const Form = () => {
  return (
    <div className="bg-white p-6 ">
      <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Input label="First Name" required />
        <Input label="Last Name" required />

        {/* Country / Region Dropdown */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-2">Country / Region</label>
          <select
            id="country"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select a country / region</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
            {/* Add more countries here */}
          </select>
        </div>

        <Input label="Town / City" required />
        <Input label="Street Address" placeholder="House number and street name" required />

        {/* State Dropdown */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
          <select
            id="state"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select a state</option>
            <option value="ny">New York</option>
            <option value="ca">California</option>
            <option value="tx">Texas</option>
          </select>
        </div>

        <Input label="Zip" required />
        <Input label="Email Address" type="email" required />

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
          <select
            id="phone"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select phone code</option>
            <option value="+1">+998 (UZB)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <input type="checkbox" id="shipDifferent" className="mr-2" />
        <label htmlFor="shipDifferent" className="text-sm">Ship to a different address?</label>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium">Order Notes (Optional)</label>
        <textarea className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" rows="3"></textarea>
      </div>
    </div>
  );
};

export default Form;
