import React from "react";

const Button = ({ text, to, className }) => {
  return (
    <button
      href="#"
      className={`font-Nunito rounded-full px-10 py-3 font-bold text-white bg-blue-130 ${className}`}
    >
      <a href={to}>{text}</a>
    </button>
  );
};

export default Button;
