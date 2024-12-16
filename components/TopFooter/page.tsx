import React from 'react';
import Image from 'next/image';
import frame from '../../public/Frame.png';

const TopFooter = () => {
  return (
    <div className="bg-[#F0F0F0] h-2 flex justify-center items-center">
      <div className="w-[1440px] mt-20 sm:mt-32 lg:mt-40 flex justify-center items-center">
        <div className="w-[90%] max-w-[1240px] sm:h-auto flex flex-col sm:flex-row px-4 py-8 sm:px-8 rounded-2xl bg-black sm:-mt-12 lg:-mt-16">
          <div className="sm:w-1/2 mb-6 sm:mb-0">
            <h1 className="text-center sm:text-left font-[Integral CF] font-extrabold text-2xl sm:text-3xl text-white">
              STAY UPTO DATE ABOUT <br className="hidden sm:block" /> OUR LATEST OFFERS
            </h1>
          </div>
          <div className="sm:w-1/2 flex flex-col items-center sm:items-end">
            <div className="w-full max-w-[349px] h-[48px] bg-white text-slate-500 rounded-3xl mb-4 flex items-center px-4">
              <Image src={frame} alt="frame" className="mr-2" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-grow bg-transparent outline-none text-sm"
              />
            </div>
            <button className="w-full max-w-[349px] h-[48px] bg-white rounded-3xl flex justify-center items-center font-semibold text-black text-sm">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;

