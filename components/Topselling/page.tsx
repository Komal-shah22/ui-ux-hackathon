import React from "react";
import ProductCard from "@/components/ProductCard/page";

const Topselling = () => {
  const products = [
    {
      id: 1,
      image: "/greenshirt.png",
      title: "VERTICAL STRIPED SHIRT",
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/orangeshirt.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/shorts.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
    {
      id: 4,
      image: "/pant.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-8">TOP SELLING</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white border-gray-500 border-2 text-black px-14 py-3 rounded-3xl shadow-lg hover:bg-black hover:text-white transition-all duration-200">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topselling;



