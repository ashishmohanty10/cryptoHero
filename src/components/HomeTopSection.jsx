import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import HeroImg from "../assets/Savings-cuate.png";
import Buttons from "./Buttons";

const HomeTopSection = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 justify-center items-center pt-5 pb-10">
        <div className="lg:flex justify-start items-center lg:gap-x-10">
          <div className="hidden lg:block">
            <FaFacebook
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
            <FaMedium
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
            <FaTelegramPlane
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
            <FaTwitter
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
            <FaLinkedin
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
            <FaGithub
              className="my-5 text-white text-xl hover:text-sub-heading duration-200"
              size={30}
            />
          </div>

          <div className="flex justify-between items-center space-x-5">
            <div>
              <h1 class="font-primary-font text-center text-4xl font-bold text-sub-heading mb-5">
                Unlocking the Power of Crypto: Be the Hero of Your Financial
                Future!
              </h1>

              <p class="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                Cryptocurrency offers financial freedom. Dive in, educate
                yourself, and invest wisely. Be your financial hero—embrace
                crypto, stay informed, and unlock your destiny. So, become the
                hero of your financial future. Embrace crypto, stay informed,
                and invest responsibly. With determination, you can unlock
                financial freedom and shape your destiny on your terms.
              </p>

              <div className="flex justify-center items-center gap-x-4">
                <div className="flex gap-x-5">
                  <Buttons
                    title={"DISCOVER"}
                    className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
                  />
                  <Buttons
                    title={"PRICING"}
                    className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-80"
                  />
                </div>
                <div class="flex justify-center items-center gap-x-4">
                  <a href="" class="text-slate-100">
                    <FaArrowCircleDown
                      size={18}
                      className="animate-bounce hover:text-blue-500 duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:w-full md:flex justify-center items-center drop-shadow-lg">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
