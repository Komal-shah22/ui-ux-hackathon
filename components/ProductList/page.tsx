import React from "react";
import  ProductCard from "@/components/ProductCard/page"; 

const ProductList = () => {
  const products = [
    {
      id: 15,
      image: "/t-shirt.png",
      title: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
    },
    {
      id: 16,
      image: "/jeans.png",
      title: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      rating: 3.5,
    },
    {
      id: 17,
      image: "/shirt.png",
      title: "Checkered Shirt",
      price: 180,
      rating: 4.5,
    },
    {
      id: 18,
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 capitalize">
          New Arrivals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-transparent border-2 border-gray-500 text-black px-10 py-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;



