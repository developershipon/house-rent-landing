import React from "react";

const Img = ({ src }) => {
  return (
    <img
      src={src}
      alt="images"
      className={`w-full h-full mx-auto object-cover`}
    />
  );
};

export default Img;
