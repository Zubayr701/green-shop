const Input = ({ label, type = "text", placeholder, required }) => {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required={required}
        />
      </div>
    );
  };
  
  export default Input;
  