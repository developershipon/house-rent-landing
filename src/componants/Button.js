import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      href="#"
      className={`font-Nunito rounded-full px-10 py-3 font-bold text-white bg-blue-130 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
