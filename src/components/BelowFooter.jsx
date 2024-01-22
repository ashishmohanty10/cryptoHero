import React from "react";
import logo from "../assets/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const BelowFooter = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div>
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-[80px]" />
            <h3 className="text-sub-heading font-primary-font font-semibold text-xl">
              CryptoHero
            </h3>
          </div>

          <div className="flex justify-center items-center gap-x-5">
            <FaFacebook
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
            <FaMedium
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
            <FaTelegramPlane
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
            <FaTwitter
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
            <FaLinkedin
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
            <FaGithub
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowFooter;
