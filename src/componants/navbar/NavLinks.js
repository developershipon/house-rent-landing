import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Location",
      link: "www.fiverr.com",
    },
    {
      name: "Blogs",
      link: "www.google.com",
    },
    {
      name: "Testimoials",
      link: "www.facebook.com",
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
    </>
  );
};

export default NavLinks;
