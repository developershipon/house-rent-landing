import React from "react";
import { Links, Social } from "../../api/footerlinks";
import Img from "../Img";

const Footer = () => {
  return (
    <section className="relative py-5 sm:py-10 md:py-20">
      <div className="container mx-auto flex flex-wrap justify-between items-center border-b p-5 sm:py-10 sm:px-10 lg:px-20">
        <div className="w-full lg:w-4/6">
          <div className="flex flex-wrap items-center">
            <div className="px-2">
              <Img src="image/footer-logo.svg" />
            </div>
            <h4 className="font-Nunito px-2 font-bold text-xl w-36">
              Yahaha Housing
            </h4>
          </div>
        </div>
        <div className="w-full lg:w-2/6 pt-10 lg:pt-0">
          <p className="font-Nunito w-full mx-auto text-h_black text-xl">
            2021 Award winning brands and Lorem ipsum dolor sit amet adipiscing
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-10 lg:px-20 py-10 flex flex-wrap justify-between gap-y-10">
        {Links.map((link, i) => (
          <ul key={i}>
            <h1 className="font-Nunito font-bold text-gray-600 pb-3 text-lg">
              {link.title}
            </h1>
            {link.links.map((nl, index) => (
              <li
                key={index}
                className="font-Nunito text-black-120 py-2.5 text-lg"
              >
                <a href={nl.to}>{nl.text}</a>
              </li>
            ))}
          </ul>
        ))}
        <div className="w-full lg:w-auto flex flex-wrap lg:flex-col gap-10 lg:justify-center lg:items-center">
          {Social.map((src, i) => (
            <a key={i} href={src.to}>
              <img
                className="h-10 w-10 bg-darkblue rounded-full"
                src={src.src}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
