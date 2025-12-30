import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  return (
    <label className="flex flex-col font-bold text-stone-700">
      {label}
      <input
        ref={ref}
        type={type}
        className={`p-3 bg-gray-300 outline-none border 
          focus:border-stone-600 ${className}`}
        {...props}
      />
    </label>
  );
});

export default Input;
