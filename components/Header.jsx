import React, { useState } from "react";
import Link from "next/link";

import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "Accueil", link: "/" },
    { name: "Programme", link: "/programme" },

    { name: "Vie scolaire", link: "/viescolaire" },
    { name: "Blog", link: "/blog" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md  fixed h-15 z-30 w-full ">
      <div className="md:flex items-center justify-between bg-marron py-4  2xl:px-40 md:px-20 px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-white lg:text-3xl 2xl:text-4xl">Lasalle</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-marron  gap-2 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-12 h-[50vh] flex flex-col justify-around"
              : "top-[-490px] transition-all duration-5000 ease-in"
          }`}
        >
          {Links.map(
            (
              link,
              index // Added a key prop with index
            ) => (
              <Link href={link.link} key={index} className="text-white"> 
                {link.name}
              </Link>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
