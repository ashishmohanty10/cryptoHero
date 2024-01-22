import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 justify-between items-start">
          {/* paper */}

          <div className="mb-5 lg:mb-0">
            <h3 className="text-sm text-sub-heading font-semibold pb-8 uppercase">
              Menu
            </h3>

            <ul>
              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">About</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Team</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Contact</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Blog</a>
              </li>
            </ul>
          </div>

          <div className="mb-5 lg:mb-0">
            <h3 className="text-sm text-sub-heading font-semibold pb-8 uppercase">
              PAPERS
            </h3>

            <ul>
              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">White Paper</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Technical Paper</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">One Pager</a>
              </li>
            </ul>
          </div>

          <div className="mb-5 lg:mb-0">
            <h3 className="text-sm text-sub-heading font-semibold pb-8 uppercase">
              LEGAL
            </h3>

            <ul>
              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Privacy Policies</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Tearm & Conditons</a>
              </li>

              <li className="text-lg leading-10 text-second-text-color hover:text-sub-heading duration-200">
                <a href="">Cookie Policies</a>
              </li>
            </ul>
          </div>

          <div className="mb-5 lg:mb-0">
            <h3 className="text-sm text-sub-heading font-semibold pb-8 uppercase">
              NEWSLETTERS
            </h3>

            <form action="" className="flex justify-start items-center gap-x-5">
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none bg-transparent text-sub-heading text-lg"
              />
              <FaArrowRight className="text-sub-heading" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
