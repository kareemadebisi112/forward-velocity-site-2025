import React from "react";

const Select = ({ 
  label, 
  value, 
  onChange, 
  options = [], 
  placeholder = "Select an option",
  required = false,
  className = "",
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white text-lg font-medium mb-3 text-left">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-xl text-white text-lg focus:border-green-400 focus:outline-none transition-colors ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
