import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Simplicity from "../assets/Simplicity.png";
import Attributes from "../assets/attributes.png";
import Social from "../assets/social.png";
import Security from "../assets/security.png";
import Buttons from "./Buttons";

const Benefits = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-center items-center gap-x-5 mb-5">
          <h3 className="inline text-slate-200 text-xl px-8 py-3 bg-gradient-to-r from-pink-700 to-pink-500  rounded-full  font-primary-font font-bold leading-relaxed tracking-wider">
            BENEFITS
          </h3>

          <a href="" className="text-slate-100">
            <FaArrowCircleDown
              size={18}
              className="animate-bounce hover:text-blue-500 duration-200"
            />
          </a>
        </div>

        <div>
          <h3 className="font-primary-font text-center text-4xl font-bold text-sub-heading mb-5">
            Explore the Key Features and Advantages of Our Ecosystem.
          </h3>
        </div>

        <div>
          <div className="lg:grid grid-cols-2 justify-between items-center">
            <div className=" md:flex justify-between items-center">
              <div>
                <img src={Simplicity} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h4 className="text-sub-heading font-primary-font font-semibold text-2xl pb-4">
                  SIMPLICITY
                </h4>

                <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                  User-friendly app and account creation, intuitive also for
                  casual bettors.
                </p>
              </div>
            </div>

            <div className=" md:flex justify-between items-center">
              <div>
                <img src={Attributes} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h4 className="text-sub-heading font-primary-font font-semibold text-2xl pb-4">
                  DISTINCTIVE ATTRIBUTES
                </h4>

                <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                  From betting on local teams to joining our exclusive High
                  Roller Club.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 justify-between items-center">
            <div className=" md:flex justify-between items-center">
              <div>
                <img src={Social} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h4 className="text-sub-heading font-primary-font font-semibold text-2xl pb-4">
                  SOCIAL ENGAGEMENT
                </h4>

                <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                  Community boost via player competition, chat, achievement and
                  badges.
                </p>
              </div>
            </div>

            <div className=" md:flex justify-between items-center">
              <div>
                <img src={Security} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h4 className="text-sub-heading font-primary-font font-semibold text-2xl pb-4">
                  SAFE AND SECURE
                </h4>

                <p className="text-base font-normal text-second-text-color md:text-justify font-primary-font mb-8">
                  Smart Contracts shield funds and bets from manipulation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Buttons
              title={"BUY TOKEN"}
              className="font-primary-font text-sm leading-relaxed tracking-wide text-white font-bold px-8 py-3 rounded-md bg-gradient-to-r from-pink-700 to-pink-500 hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
