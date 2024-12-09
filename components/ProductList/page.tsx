import React from "react";
import ProductCard from "@/components/ProductCard/page"; 

const ProductList = () => {
  const products = [
    {
      image: "/t-shirt.png", 
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
    },
    {
      image: "/jeans.png", 
      title: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      rating: 3.5,
    },
    {
      image: "/shirt.png", 
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5,
    },
    {
      image: "/sweat-shirt.png", 
      title: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-white py-10 border-b border-gray-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 capitalize">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white border-[80%] border-gray-500 border-2 text-black px-14 py-3 rounded-3xl shadow-lg hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

