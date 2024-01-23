import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Contact = () => {
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
        <div className="flex justify-center items-center">
          <form action="" className="flex justify-center items-center flex-col">
            <input
              type="text"
              placeholder="Your name"
              className="mb-4 py-2 px-2 bg-transparent text-sub-heading text-lg outline-none rounded-md w-[300px] border border-slate-100"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="mb-4 py-2 px-2 bg-transparent text-sub-heading text-lg outline-none rounded-md w-[300px] border border-slate-100"
            />

            <textarea
              name="Description"
              id=""
              cols="30"
              rows="10"
              className="mb-4 py-2 px-2 bg-transparent text-sub-heading text-lg outline-none rounded-md w-[300px] border border-slate-100"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
