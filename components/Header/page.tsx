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
      <header className="w-full max-w-[1240px] mx-auto h-20 border-b border-black flex items-center justify-between px-4 lg:px-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <h1 className="font-extrabold text-2xl md:text-4xl flex-1 text-center md:text-left">
          SHOP.CO
        </h1>
        <div className="md:hidden flex items-center gap-4">
          <Image src={search} alt="Search" width={24} height={24} />
          <Image src={cart} alt="Cart" width={24} height={24} />
          <Image src={vector} alt="Profile" width={24} height={24} />
        </div>
        <nav className="hidden md:flex items-center justify-between flex-1">
          <ul className="flex  lg:gap-16 capitalize text-sm lg:text-sm">
            {['shop','onSales','newArrivals','brands'].map((val, ind) => (
              <li key={ind}>
                <Link
                  href={val === 'shop' ? '/' : `/${val.replace(' ', '-').toLowerCase()}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {val}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </nav>
      </header>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white text-lg capitalize gap-4 py-4 shadow-md">
          {['shop', 'on sales', 'new arrivals', 'brands'].map((val, ind) => (
            <li key={ind}>
              <Link
                href={val === 'shop' ? '/' : `/${val.replace(' ', '-').toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-600 transition-colors"
              >
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

