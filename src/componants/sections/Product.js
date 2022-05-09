import React from "react";
import Featured from "../Featured";

const Product = () => {
  return (
    <section className="container py-5 md:py-10 lg:px-5 mx-auto">
      <h1 className="w-full text-center lg:w-2/3 text-3xl sm:text-5xl font-bold p-5 sm:px-10 md:w-8/12 xl:w-5/12 mx-auto font-Montserrat">
        Featured House That Available
      </h1>
      <div className="py-5 sm:py-10 lg:py-20">
        <Featured />
      </div>
    </section>
  );
};

export default Product;
