import React from "react";
import Button from "../Button";
import HeadText from "../HeadText";
import Img from "../Img";
import ParagraphText from "../ParagraphText";

const Home = () => {
  return (
    <section className="relative pt-20 bg-primary after:clip after:absolute after:top-1 after:h-full after:w-full after:bg-main pb-5">
      <div className="flex flex-wrap justify-around items-center xl:container mx-auto xl:mb-10">
        {/* mobile  md:hidden*/}
        <div className="md:w-8/12 xl:py-72 z-20">
          <div className="xl:w-8/12">
            <div className="text-white">
              <HeadText
                text="Find Thousands Dream Jobs Here!"
                className="xl:pr-0 xl:text-5xl"
              />
            </div>
            <div className="text-gray-150">
              <ParagraphText
                text="Are you looking for amazing jobs? Don't worry! We got it for you,
              just click the button below and you're set!"
              />
            </div>
          </div>
          <div className="md:px-5">
            <div className="w-72 sm:w-80 md:w-full mx-auto bg-white p-5 rounded-3xl md:flex md:flex-wrap md:justify-between md:items-center md:p-2 md:rounded-full xl:my-5">
              <div className="flex flex-wrap justify-around items-center text-gray-150 text-sm md:justify-items-center md:w-2/4">
                <span>Keyword</span>
                <span className="border border-black h-8 "></span>
                <span>Location</span>
              </div>
              <div className="mt-5 md:mt-0">
                <Button text="Book Now" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 z-10">
          <div className="xl:absolute right-0 top-0">
            <Img src="image/home-right.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
