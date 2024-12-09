
import React from 'react';
import { RxCross2 } from "react-icons/rx";

const TopHeader = () => {
  return (
    <>
      <div className="bg-black h-12 w-full text-white flex justify-between items-center px-4 md:px-36">
        <div className="capitalize flex-1 text-center text-xs sm:text-sm md:text-base">
          Sign up and get 20% off to your first order. 
          <span className="text-white font-medium underline"> Sign Up Now</span>

        </div>
        <button className="bg-black text-white flex items-center gap-2 text-xs sm:text-sm md:text-base">
          <RxCross2 className="ml-1 font-bold" />
        </button>
      </div>
    </>
  );
}

export default TopHeader;

