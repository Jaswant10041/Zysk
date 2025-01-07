import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
const First = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mt-20">
        <button className="border-2 rounded-full tracking-wide p-1 pr-3  border-orange-200 flex text-red-600 font-medium items-center justify-center">
          <button className="border-2 border-orange-300 rounded-full px-2">
            New feature
          </button>

          <p className="px-2">Check out the team dashboard</p>
          <FaArrowRight className="size-5 pt-1" />
        </button>
      </div>
      <div className="mt-5">
        <h1 className="text-5xl font-semibold">
          Beautiful ananlytics to grow smarter
        </h1>
      </div>
      <div className="mt-5 text-2xl">
        <p>
          Powerful, self-serve product and growth ananlytics to help you
          convert, engage, and retain more users. Trusted by over 4,000
          startups.
        </p>
      </div>
      <div className="flex mt-10">
        <button className="flex border-2 rounded-full p-2 px-4 m-2">
          <MdSlowMotionVideo className="size-5 pt-1" />
          <p className="font-medium">Demo</p>
        </button>
        <button className="border-2 rounded-full bg-red-500 px-3 m-2 text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default First;
