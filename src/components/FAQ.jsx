import React, { useState } from "react";
import { FAQList } from "./FeaturesList";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const FAQ = () => {
  const [toggleFAQ, setToggleFAQ] = useState(Array(FAQList.length).fill(false));

  const handleToggle = (index) => {
    const newToggleFAQ = [...toggleFAQ];
    newToggleFAQ[index] = !newToggleFAQ[index];
    setToggleFAQ(newToggleFAQ);
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
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

          {FAQList.map(({ question, answers }, index) => (
            <div
              key={index}
              className="mb-4 p-2 bg-transparent outline-none rounded-md md:w-[500px] w-[250px] border border-slate-100"
            >
              <div
                className="text-sub-heading text-2xl pb-4 flex justify-between items-center"
                onClick={() => handleToggle(index)}
              >
                {question}

                {toggleFAQ[index] ? (
                  <IoMdArrowDropupCircle />
                ) : (
                  <IoMdArrowDropdownCircle />
                )}
              </div>

              <div
                className={
                  toggleFAQ[index]
                    ? "text-base font-normal text-second-text-color md:text-justify font-primary-font"
                    : "text-base font-normal text-second-text-color md:text-justify font-primary-font hidden"
                }
              >
                {answers}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
