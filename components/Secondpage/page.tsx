
'use client';
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Gallery from "@/components/Galery/page";
import vector3 from "@/public/Vector (3).png";
import { RiArrowRightSLine } from "react-icons/ri";


export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "Black", hex: "#314f4B" },
    { name: "Green", hex: "#314F4A" },
    { name: "Red", hex: "#31344F" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div><ul className="flex gap-4 mb-10">
      <li className="flex mt-2">Home <RiArrowRightSLine className="mt-2"/></li>
      <li className="flex mt-2">Shop <RiArrowRightSLine className="mt-2"/></li>
      <li className="flex mt-2">Men <RiArrowRightSLine className="mt-2"/></li>
      <li className="flex mt-2 font-semibold">T-shirts <RiArrowRightSLine className="mt-2"/></li>
      </ul></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Gallery />

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex items-center mb-4 text-sm md:text-base">
            <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
            <span className="text-gray-500">(456 Reviews)</span>
          </div>
          <div className="flex items-center mb-6 flex-wrap gap-2">
            <span className="text-lg md:text-2xl font-bold text-gray-800">
              $260
            </span>
            <span className="line-through text-gray-500">$300</span>
            <span className="text-green-600 font-medium">-40%</span>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            This graphic t-shirt, perfect for any occasion, is crafted from soft
            and breathable fabric. It offers superior comfort and style.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Colors</h3>
            <div className="flex space-x-2 flex-wrap">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.name
                      ? "border-black"
                      : "border-gray-300"
                  } cursor-pointer`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "border-black text-black"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 border rounded-l-3xl bg-gray-100 hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 border rounded-r-3xl bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12 border-b pt-6">
        <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
          <li className="cursor-pointer hover:text-black">
            Product Details
          </li>
          <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
            Rating & Reviews
          </li>
          <li className="cursor-pointer hover:text-black">FAQs</li>
        </ul>
      </div>
      <div className="mt-12 flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-lg md:text-xl font-semibold mb-2">
            All Reviews <span className="text-gray-500">(451)</span>
          </h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
            <Image src={vector3} alt="vector" width={24} height={24} />
          </div>
          <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
            Latest <IoIosArrowDown className="mt-1" />
          </div>
          <button className="bg-black text-white rounded-3xl px-4 py-2">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}
