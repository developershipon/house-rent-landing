import React from "react";
import Button from "../Button";

const NavLinks = () => {
  const Links = [
    {
      name: "Location",
      link: "https://www.fiverr.com",
    },
    {
      name: "Blogs",
      link: "https://www.google.com",
    },
    {
      name: "Testimoials",
      link: "https://www.facebook.com",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li
          key={i}
          className="font-semibold font-Nunito text-gray-150 hover:text-white"
        >
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
      <Button text="Register" />
    </>
  );
};

export default NavLinks;
