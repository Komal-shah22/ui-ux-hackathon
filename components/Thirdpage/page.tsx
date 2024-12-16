'use client';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/page';
import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";
import vector from '../../public/Vector (3).png';
import Image from 'next/image';
import { HiArrowSmLeft } from "react-icons/hi";

const CasualPage = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([50, 200]);

  const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  const products = [
    {
      image: "/whiteshirt.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      rating: 3.5,
    },
    {
      image: "/pinkshirt.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
    {
      image: "/blackshirt.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
    {
      image: "/cartshirt.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
    {
      image: "/jeans.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
    {
      image: "/shorts.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
    {
      image: "/blueshirt.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
    {
      image: "/greenshirt.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
    {
      image: "/jeans.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
  ];

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = event.target.value.split(',').map(Number);
    setSelectedPriceRange(newPriceRange as [number, number]);
  };

  const handleApplyFilter = () => {
    console.log('Filters Applied:', { selectedColor, selectedSize, selectedPriceRange });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Casual</h1>

        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 gap-2 bg-white p-4 rounded-lg shadow-md mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4 border-b flex justify-between pb-5">
              Filters <span><Image src={vector} alt="vector" /></span>
            </h2>
            <div className="border-b pb-4">
              <p className="flex mb-2">T-shirt <RiArrowRightSLine className="ml-auto mt-2" /></p>
              <p className="flex mb-2">Shorts <RiArrowRightSLine className="ml-auto mt-2" /></p>
              <p className="flex mb-2">Shirts <RiArrowRightSLine className="ml-auto mt-2" /></p>
              <p className="flex mb-2">Hoodies <RiArrowRightSLine className="ml-auto mt-2" /></p>
              <p className="flex mb-2">Jeans <RiArrowRightSLine className="ml-auto mt-2" /></p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Price</h3>
              <input
                type="range"
                min="50"
                max="200"
                value={selectedPriceRange[0]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>${selectedPriceRange[0]}</span>
                <span>${selectedPriceRange[1]}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1 px-2 border rounded-3xl text-sm ${selectedSize === size ? 'bg-gray-300' : 'text-gray-600'} hover:bg-gray-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Dress Style</h3>
              <ul className="space-y-2">
                {styles.map(style => (
                  <li
                    key={style}
                    className="text-gray-600 cursor-pointer hover:underline"
                  >
                    {style}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleApplyFilter} className="mt-4 w-full bg-black text-white py-2 rounded-3xl">Apply Filter</button>
          </aside>

          <div className="flex-1 bg-white py-10 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20 flex justify-between items-center mt-8 px-4 lg:px-0 flex-col lg:flex-row">
          <button className="bg-gray-300 text-gray-700 py-2 px-4 flex items-center justify-center rounded mb-4 lg:mb-0">
            <HiArrowSmLeft /> Previous
          </button>

          <div className="flex space-x-2 mb-4 lg:mb-0">
            {[...Array(5).keys()].map(page => (
              <button
                key={page}
                className="w-8 h-8 flex items-center justify-center border rounded"
              >
                {page + 1}
              </button>
            ))}
          </div>

          <button className="bg-gray-300 text-gray-700 py-2 px-4 flex justify-center items-center rounded">
            Next <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasualPage;


