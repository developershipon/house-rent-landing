import React, { useState } from "react";
import Button from "../Button";
import Img from "../Img";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-primary text-white w-full fixed mx-auto z-50">
      <div className="md:container s mx-auto flex justify-between py-5">
        <div className="flex flex-wrap items-center cursor-pointer">
          <div className="px-2">
            <Img src="image/logo.svg" />
          </div>
          <h4 className="font-Nunito px-2 font-bold text-xl w-36">
            Yahaha Housing
          </h4>
        </div>
        <ul className="md:flex hidden items-center gap-10">
          <NavLinks />
          <Button text="Register" />
        </ul>
        {/* Mobile Nav */}
        <ul
          className={`fixed top-0 z-50 bg-primary w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
        >
          <NavLinks />
          <div className="">
            <Button text="Register" />
          </div>
        </ul>

        <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
          <div name={`${open ? "close" : "menu"}`}>
            <Img src="image/menu.svg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
