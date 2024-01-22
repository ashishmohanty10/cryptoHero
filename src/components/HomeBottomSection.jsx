import React from "react";
import { Features } from "./FeaturesList";
const HomeBottomSection = () => {
  return (
    <div className="py-10">
      <div className="lg:grid grid-cols-3 justify-between items-center">
        {Features.map(({ id, imgUrl, heading, para }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center mb-16  lg:mb-0"
          >
            <img src={imgUrl} alt="" className="mb-3" />

            <h3 className="mb-1 text-2xl font-semibold pt-9 text-white">
              {heading}
            </h3>
            <p className="font-primary-font text-center text-lg font-normal leading-8 tracking-wide text-second-text-color w-[70%]">
              {para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBottomSection;
