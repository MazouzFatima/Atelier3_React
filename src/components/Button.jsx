function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium 
        bg-stone-700 text-stone-200 
        hover:bg-stone-600 transition 
        ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
