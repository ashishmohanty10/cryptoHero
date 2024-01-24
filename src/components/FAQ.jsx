import React, { useState } from "react";
import { FAQList } from "./FeaturesList";
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
