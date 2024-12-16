import React from "react";
import ProductCard from "@/components/ProductCard/page"; 

const Topselling= () => {
  const products = [
    {
      image: "/blueshirt.png", 
      title: "VERTICAL STRIPED SHIRT",
      price: 120,
      rating: 4.5,
    },
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
  ];

  return (
    <div className="bg-white py-10 mb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 ">YOU MIGHT ALSO LIKE</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topselling;
