
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {Array.from({ length: 5 - fullStars }, (_, i) => (
          <FaStar key={i} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <Link href={`/productDetail/${id}`} passHref>
      <div className="relative group flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 w-full sm:w-[300px]">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            className="object-cover rounded-t-lg"
            layout="fill"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-black text-white px-16 py-5 rounded-lg flex items-center justify-center text-lg font-semibold relative overflow-hidden group/button">
              <span className="absolute transition-all duration-300 transform group-hover/button:translate-y-full">
                Add to Cart
              </span>
              <IoCart className="absolute transition-all duration-300 transform translate-y-full group-hover/button:translate-y-0 w-6 h-6" />
            </button>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mt-4 mb-2">{title}</h2>
        <div className="flex items-center space-x-1 text-yellow-500 mb-1">
          {renderStars()}
          <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-bold text-black">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
          {discount && (
            <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
              {discount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

