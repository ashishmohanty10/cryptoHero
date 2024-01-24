import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { NavLinks } from "./NavLinks";
import Buttons from "./Buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="bg-background sticky top-0 z-50">
      <div className="relative">
        <div className="container">
          <div className="flex justify-between items-center py-5">
            <div>
              <img src={Logo} alt="" className="w-[80px]" />
            </div>

            <ul className="hidden lg:flex justify-between items-center gap-x-5">
              {NavLinks.map(({ id, href }) => (
                <li
                  key={id}
                  className="font-primary-font text-xs lg:text-lg lg:leading-relaxed font-medium text-second-text-color hover:text-sub-heading duration-200"
                >
                  {href}
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-between items-center gap-x-5">
              <Buttons
                title={"LOGIN"}
                className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
              />
              <Buttons
                title={"SIGNUP"}
                className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-80"
              />
            </div>

            {/* mobile responsive */}
            <div className="lg:hidden" onClick={handleMenu}>
              <div>
                {!openMenu ? (
                  <GiHamburgerMenu className="text-sub-heading" size={16} />
                ) : (
                  <RxCross2 className="text-sub-heading" size={20} />
                )}
              </div>

              <div>
                {openMenu ? (
                  <div className="absolute m-auto left-0 right-0 w-[400px] h-[500] border border-sub-heading p-10 rounded-md bg-[#01051e63] backdrop-blur-sm flex justify-center items-center flex-col shadow-md z-50 ">
                    {NavLinks.map(({ id, href }) => (
                      <li
                        key={id}
                        className="mb-5 list-none font-primary-font text-xl lg:text-lg lg:leading-relaxed font-semibold text-slate-300 hover:text-sub-heading duration-200"
                      >
                        {href}
                      </li>
                    ))}
                  </div>
                ) : (
                  "null"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
