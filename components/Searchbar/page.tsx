
import React from "react";
import Image from "next/image";
import vactor from '../../public/Vector.png';
import cart from '../../public/cart.png';
import search from '../../public/search.png';
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="relative w-[600px] max-w-xl">
        <div className="flex items-center absolute left-3 top-1/2 transform -translate-y-1/2 text-[#000000]">
          <FiSearch className="w-5 h-5 text-slate-500" />
        </div>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full pl-10 pr-10 py-2 rounded-2xl bg-[#f5f5f5] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      <div className="flex justify-center items-center gap-4 font-bold text-2xl ml-4 mr-8">
        <Image 
          src={search} 
          alt="search" 
          className="lg:hidden"  
        />
        <Image src={cart} alt="cart" />
        <Image src={vactor} alt="vactor" />
      </div>
    </div>
  );
};

export default SearchBar;


