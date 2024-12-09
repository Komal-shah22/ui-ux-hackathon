'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/Searchbar/page';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from "next/image";
import vector from '../../public/Vector.png';
import cart from '../../public/cart.png';
import search from '../../public/search.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full mx-w-[1200px] mx-auto h-20 border-black border-b flex items-center justify-between px-6 pt-6 font-[poppins] gap-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        
        <h1 className="font-extrabold text-4xl sm:text-sm md:text-4xl flex-1 text-center sm:pl-0">SHOP.CO</h1>
        
        <div className="md:hidden flex justify-between items-center gap-4 font-bold text-4xl ml-10 mr-0 mt-4">
          <Image src={search} alt="search" />
          <Image src={cart} alt="cart" />
          <Image src={vector} alt="vector" />
        </div>
        
        <div className="hidden md:flex w-full items-center justify-between ml-16">
          <ul className="flex gap-8 capitalize text-sm lg:text-base">
            {['shop', 'on sales', 'new arrivals', 'brands'].map((val, ind) => (
              <li key={ind}>
                <Link href={val === 'shop' ? '/' : `/${val.replace(' ', '-').toLowerCase()}`}>
                  {val}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="ml-2 max-md:hidden hidden lg:block ">
            <SearchBar />
          </div>
        </div>
      </div>
      {menuOpen && (
        <ul className="md:hidden md:gap-8 lg:gap-10 flex flex-col items-center bg-white text-lg capitalize gap-4 py-4">
          {['shop', 'on sales', 'new arrivals', 'brands'].map((val, ind) => (
            <li key={ind}>
              <Link href={val === 'shop' ? '/' : `/${val.replace(' ', '-').toLowerCase()}`}>
                {val}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Header;
