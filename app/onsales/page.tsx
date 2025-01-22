"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/querries";
import { urlFor } from "@/sanity/lib/image";

const Sales = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mb-10 mt-8">
      <h1 className="text-5xl font-extrabold text-center mb-12">All Product Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                alt={item.name || "Product Image"}
                width={300}
                height={300}
                className="object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-lg font-semibold mb-2 text-center">
              {item.name}
            </h2>
            <div className="text-center text-gray-500 mb-2">
              <span className="text-yellow-400">★★★★☆</span> 4.5/5
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="text-lg font-bold text-black">
                ${item.price - (item.discountPercent || 0) / 100 * item.price}
              </p>
              {item.discountPercent && (
                <>
                  <p className="line-through text-gray-400">${item.price}</p>
                  <p className="text-red-600">
                    -{item.discountPercent}%
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-white border-black border-2 text-black px-10 py-4 rounded-full hover:bg-gray-800 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default Sales;
