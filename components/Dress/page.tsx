
import React from 'react';
import Image from 'next/image';
import ceo from '../../public/ceo2.png'
import cofounder from '../../public/ceo.png';
import ceo2 from '../../public/co-founder-2.png';
import cofounder2 from '../../public/co-founder-brands.png';

const Dress = () => {
  return (
    <div className="w-full max-w-[1239px] mx-auto h-auto mt-10 pb-10 rounded-xl bg-[#F0F0F0]">
      <h1 className="flex justify-center items-center font-extrabold text-4xl md:text-6xl pt-10 md:pt-20 text-center px-4">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="flex flex-wrap justify-center mt-10 gap-4 px-4">
        <div className="relative w-full md:w-[407px] h-[200px] md:h-[289px] rounded-3xl overflow-hidden">
          <Image
            src={cofounder2}
            alt="cofounder"
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-96 left-4 md:bottom-10 md:left-10 text-black font-bold text-lg md:text-2xl px-3 py-1 rounded-lg ">
            Casual
          </p>
        </div>
        <div className="relative w-full md:w-[684px] h-[200px] md:h-[289px] rounded-3xl overflow-hidden">
          <Image
            src={cofounder}
            alt="cofounder"
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-96 left-10 md:bottom-10 md:left-10 text-black font-bold text-lg md:text-2xl px-3 py-1 rounded-lg ">
            Formal
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-4 px-4">
        <div className="relative w-full md:w-[684px] h-[200px] md:h-[289px] rounded-3xl overflow-hidden">
          <Image
            src={ceo2}
            alt="ceo"
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-96 left-10 md:bottom-10 md:left-10 text-black font-bold text-lg md:text-2xl px-3 py-1 rounded-lg ">
            Party
          </p>
        </div>
        <div className="relative w-full md:w-[407px] h-[200px] md:h-[289px] rounded-3xl overflow-hidden">
          <Image
            src={ceo}
            alt="ceo"
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-black font-bold text-lg md:text-2xl px-3 py-1 rounded-lg ">
            Gym
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dress;

