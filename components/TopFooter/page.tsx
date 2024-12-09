import React from 'react';
import Image from 'next/image';
import frame from '../../public/Frame.png';

const TopFooter = () => {
  return (
    <div className="bg-[#F0F0F0] w-full sm:h-auto lg:h-auto mt-20 sm:mt-32 lg:mt-40 flex justify-center items-center pb-20">
      <div className="w-full sm:w-[70%] h-auto sm:h-[150px] flex-col sm:flex-row px-4 py-8 sm:px-0 rounded-2xl bg-black flex justify-around items-center -mt-10 sm:-mt-12 lg:-mt-16">
        <div>
          <h1 className="sm:text-left mb-4 sm:mb-0 font-[Integral CF] font-extrabold text-2xl text-white">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
        </div>
        <div>
          <div className="w-[349px] h-[48px] bg-white text-slate-500 rounded-3xl mb-4 flex justify-evenly sm:w-auto items-center">
            <Image src={frame} alt="frame" />
            <p className="mr-24">Enter your email address</p>
          </div>
          <div className="w-[349px] h-[48px] bg-white rounded-3xl flex justify-evenly items-center">
            <p>Subscribe to Newsletter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;


