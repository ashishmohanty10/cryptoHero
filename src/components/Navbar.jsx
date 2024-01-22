import React from "react";
import Logo from "../assets/logo1.png";
import { NavLinks } from "./NavLinks";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="bg-background sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <div>
            <img src={Logo} alt="" className="w-[80px]" />
          </div>

          <ul className="flex justify-between items-center gap-x-5">
            {NavLinks.map(({ id, href }) => (
              <li
                key={id}
                className="font-primary-font text-xs lg:text-lg lg:leading-relaxed font-medium text-second-text-color hover:text-sub-heading duration-200"
              >
                {href}
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center gap-x-5">
            <Buttons
              title={"LOGIN"}
              className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
            />
            <Buttons
              title={"SIGNUP"}
              className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
