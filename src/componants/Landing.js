import React from "react";
import Nav from "./navbar/Nav";
import Home from "./sections/Home";
import Product from "./sections/Product";
import Content from "./Content";
import Footer from "./footer/Footer";

const Landing = () => {
  return (
    <>
      <main className="bg-main selection:text-[#f28c22]">
        <Nav />
        <Home />
        <section className="relative">
          <Content
            to="#"
            order="order-last md:order-first"
            path="left-hero.svg"
            head="Find New Home Is Easy"
            sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            click="Browse"
          />
        </section>
        <Product />
        <section className="relative">
          <Content
            to="#"
            order="order-last "
            path="right.svg"
            head="Be The One Who Own This"
            sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            click="Browse"
          />
        </section>
        <section className="relative">
          <Content
            to="#"
            order="order-last md:order-none"
            path="left-hero.svg"
            head="10.000+ Happy Customers"
            sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            click="Browse"
          />
        </section>

        <section className="container mx-auto relative p-5 sm:p-10 xl:p-0 lg:mt-10">
          <div className="relative p-10 sm:py-16 sm:px-14 lg:p-32 rounded-3xl bg-rectangle object-center bg-cover">
            <div className="flex flex-wrap flex-col md:flex-row justify-between items-center">
              <h1 className="font-Montserrat text-white font-bold text-left text-2xl lg:text-4xl xl:text-6xl w-full md:w-1/2">
                Discover Your Dream House
              </h1>
              <div className="font-Nunito relative bg-blue-130 rounded-full font-bold text-white text-center mt-5 py-2 px-4 sm:py-3 sm:px-5 lg:py-5 lg:px-10 w-full sm:w-auto">
                Discover Now
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Landing;
