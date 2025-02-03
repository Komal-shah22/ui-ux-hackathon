"use client";
import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import vector from "../../public/Vector (3).png";
import Image from "next/image";
import Pagination from "../Pagination/page";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { eightitem } from "@/sanity/lib/querries";
import { urlFor } from "@/sanity/lib/image";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

const CasualPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(eightitem);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([50, 200]);

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "black",
    "white",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPriceRange = event.target.value.split(",").map(Number);
    setSelectedPriceRange(newPriceRange as [number, number]);
  };

  const handleApplyFilter = () => {
    console.log("Filters Applied:", {
      selectedColor,
      selectedSize,
      selectedPriceRange,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Casual</h1>

        <div className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 gap-2 bg-white p-4 rounded-lg shadow-md mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4 border-b flex justify-between pb-5">
              Filters{" "}
              <span>
                <Image src={vector} alt="vector" />
              </span>
            </h2>
            <div className="border-b pb-4">
              <p className="flex mb-2">
                T-shirt <RiArrowRightSLine className="ml-auto mt-2" />
              </p>
              <p className="flex mb-2">
                Shorts <RiArrowRightSLine className="ml-auto mt-2" />
              </p>
              <p className="flex mb-2">
                Shirts <RiArrowRightSLine className="ml-auto mt-2" />
              </p>
              <p className="flex mb-2">
                Hoodies <RiArrowRightSLine className="ml-auto mt-2" />
              </p>
              <p className="flex mb-2">
                Jeans <RiArrowRightSLine className="ml-auto mt-2" />
              </p>
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
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1 px-2 border rounded-3xl text-sm ${selectedSize === size ? "bg-gray-300" : "text-gray-600"} hover:bg-gray-200`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Dress Style</h3>
              <ul className="space-y-2">
                {styles.map((style) => (
                  <li
                    key={style}
                    className="text-gray-600 cursor-pointer hover:underline"
                  >
                    {style}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleApplyFilter}
              className="mt-4 w-full bg-black text-white py-2 rounded-3xl"
            >
              Apply Filter
            </button>
          </aside>

          <div className="container mx-auto px-4 py-8 mb-10 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {products.map((item) => (
                <div
                  key={item._id}
                  className="relative group border rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden"
                >
                  <Link href={`/product/${item.slug?.current}`}>
                    {/* Product Image */}
                    {item.image && (
                      <div className="relative">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name || "Product Image"}
                          width={300}
                          height={300}
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-black text-white px-14 py-5 rounded-lg flex items-center justify-center text-lg font-semibold relative overflow-hidden group/button">
                            <span className="absolute transition-all duration-300 transform group-hover/button:translate-y-full">
                              Add to Cart
                            </span>
                            <IoCart className="absolute transition-all duration-300 transform translate-y-full group-hover/button:translate-y-0 w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 text-center">
                        {item.name}
                      </h2>
                      <div className="text-center text-gray-500 mb-2">
                        <span className="text-yellow-400">★★★★☆</span> 4.5/5
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <p className="text-lg font-bold text-black">
                          $
                          {item.price -
                            ((item.discountPercent || 0) / 100) * item.price}
                        </p>
                        {item.discountPercent && (
                          <>
                            <p className="line-through text-gray-400">
                              ${item.price}
                            </p>
                            <p className="text-red-600">
                              -{item.discountPercent}%
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default CasualPage;








// "use client";  
// import React, { useEffect, useState } from "react";
// import { RiArrowRightSLine } from "react-icons/ri";
// import vector from "../../public/Vector (3).png";
// import Image from "next/image";
// import Pagination from "../Pagination/page";
// import { Product } from "@/types/products";
// import { client } from "@/sanity/lib/client";
// import { eightitem } from "@/sanity/lib/querries";
// import { urlFor } from "@/sanity/lib/image";
// import { IoCart } from "react-icons/io5";
// import Link from "next/link";

// const CasualPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: Product[] = await client.fetch(eightitem);
//       setProducts(fetchedProducts);
//       setFilteredProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }, []);

//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([50, 200]);

//   const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
//   const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
//   const styles = ["Casual", "Formal", "Party", "Gym"];

//   useEffect(() => {
//     let filtered = products;

//     if (selectedColor) {
//       filtered = filtered.filter((item) => 
//         Array.isArray(item.colors) 
//           ? item.colors.some((color) => color.toLowerCase() === selectedColor.toLowerCase()) 
//           : item.colors?.toLowerCase() === selectedColor.toLowerCase()
//       );
//     }

//     if (selectedSize) {
//       filtered = filtered.filter((item) => 
//         Array.isArray(item.sizes) 
//           ? item.sizes.some((size) => size.toLowerCase() === selectedSize.toLowerCase()) 
//           : item.sizes?.toLowerCase() === selectedSize.toLowerCase()
//       );
//     }

//     filtered = filtered.filter((item) => item.price >= selectedPriceRange[0] && item.price <= selectedPriceRange[1]);

//     setFilteredProducts(filtered);
//   }, [selectedColor, selectedSize, selectedPriceRange, products]);

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-6">Casual</h1>

//         <div className="flex flex-col lg:flex-row">
//           <aside className="w-full lg:w-1/4 gap-2 bg-white p-4 rounded-lg shadow-md mb-8 lg:mb-0">
//             <h2 className="text-xl font-semibold mb-4 border-b flex justify-between pb-5">
//               Filters <span><Image src={vector} alt="vector" /></span>
//             </h2>

//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Price</h3>
//               <input
//                 type="range"
//                 min="50"
//                 max="200"
//                 value={selectedPriceRange[0]}
//                 onChange={(e) => setSelectedPriceRange([Number(e.target.value), selectedPriceRange[1]])}
//                 className="w-full"
//               />
//               <div className="flex justify-between text-sm">
//                 <span>${selectedPriceRange[0]}</span>
//                 <span>${selectedPriceRange[1]}</span>
//               </div>
//             </div>

//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Colors</h3>
//               <div className="flex flex-wrap gap-2">
//                 {colors.map((color) => (
//                   <div
//                     key={color}
//                     className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? "border-black" : "border-gray-300"}`}
//                     style={{ backgroundColor: color }}
//                     onClick={() => setSelectedColor(color)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Size</h3>
//               <div className="grid grid-cols-3 gap-2">
//                 {sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`py-1 px-2 border rounded-3xl text-sm ${selectedSize === size ? "bg-gray-300" : "text-gray-600"} hover:bg-gray-200`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           <div className="container mx-auto px-4 py-8 mb-10 mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((item) => (
//                   <div key={item._id} className="relative group border rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden">
//                     <Link href={`/product/${item.slug?.current}`}>
//                       {item.image && (
//                         <div className="relative">
//                           <Image
//                             src={urlFor(item.image).url()}
//                             alt={item.name || "Product Image"}
//                             width={300}
//                             height={300}
//                             className="object-cover rounded-t-lg"
//                           />
//                           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button className="bg-black text-white px-14 py-5 rounded-lg flex items-center justify-center text-lg font-semibold relative overflow-hidden group/button">
//                               <span className="absolute transition-all duration-300 transform group-hover/button:translate-y-full">
//                                 Add to Cart
//                               </span>
//                               <IoCart className="absolute transition-all duration-300 transform translate-y-full group-hover/button:translate-y-0 w-6 h-6" />
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                       <div className="p-4">
//                         <h2 className="text-lg font-semibold mb-2 text-center">
//                           {item.name}
//                         </h2>
//                         <div className="text-center text-gray-500 mb-2">
//                           <span className="text-yellow-400">★★★★☆</span> 4.5/5
//                         </div>
//                         <div className="flex justify-center items-center gap-2">
//                           <p className="text-lg font-bold text-black">
//                             ${item.price - ((item.discountPercent || 0) / 100) * item.price}
//                           </p>
//                           {item.discountPercent && (
//                             <>
//                               <p className="line-through text-gray-400">${item.price}</p>
//                               <p className="text-red-600">-{item.discountPercent}%</p>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <p className=" font-extrabold text-4xl text-center text-black col-span-full">No products found.</p>
//               )}
//             </div>
//           </div>
//         </div>
//         <Pagination />
//       </div>
//     </div>
//   );
// };

// export default CasualPage;









// "use client";
// import React, { useEffect, useState } from "react";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Image from "next/image";
// import Pagination from "../Pagination/page";
// import { Product } from "@/types/products";
// import { client } from "@/sanity/lib/client";
// import { eightitem } from "@/sanity/lib/querries";
// import { urlFor } from "@/sanity/lib/image";
// import { IoCart } from "react-icons/io5";
// import Link from "next/link";

// const CasualPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([50, 200]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: Product[] = await client.fetch(eightitem);
//       setProducts(fetchedProducts);
//       setFilteredProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = products;

//     if (selectedColor) {
//       updatedProducts = updatedProducts.filter(product => product.colors?.includes(selectedColor));
//     }
//     if (selectedSize) {
//       updatedProducts = updatedProducts.filter(product => product.sizes?.includes(selectedSize));
//     }
//     if (selectedStyle) {
//       updatedProducts = updatedProducts.filter(product => product.category === selectedStyle);
//     }
//     if (selectedCategory) {
//       updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
//     }
//     updatedProducts = updatedProducts.filter(product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]);
    
//     setFilteredProducts(updatedProducts);
//   }, [selectedColor, selectedSize, selectedStyle, selectedCategory, selectedPriceRange, products]);

//   // Functions to toggle filters
//   const toggleCategory = (category: string) => {
//     setSelectedCategory(prev => (prev === category ? null : category));
//   };

//   const toggleStyle = (style: string) => {
//     setSelectedStyle(prev => (prev === style ? null : style));
//   };

//   const toggleColor = (color: string) => {
//     setSelectedColor(prev => (prev === color ? null : color));
//   };

//   const toggleSize = (size: string) => {
//     setSelectedSize(prev => (prev === size ? null : size));
//   };

//   const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
//   const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
//   const styles = ["Casual", "Formal", "Party", "Gym"];
//   const categories = ["T-shirt", "Shorts", "Shirts", "Hoodies", "Jeans"];

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-6">Casual</h1>
//         <div className="flex flex-col lg:flex-row">
//           {/* Sidebar */}
//           <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md mb-8 lg:mb-0">
//             <h2 className="text-xl font-semibold mb-4 border-b pb-5">Filters</h2>

//             {/* Category Filter */}
//             {categories.map(category => (
//               <p key={category} className="flex mb-2 cursor-pointer" onClick={() => toggleCategory(category)}>
//                 {category} <RiArrowRightSLine className="ml-auto mt-2" />
//               </p>
//             ))}

//             {/* Price Range Filter */}
//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Price</h3>
//               <input type="range" min="50" max="200" value={selectedPriceRange[0]} 
//                 onChange={e => setSelectedPriceRange([Number(e.target.value), selectedPriceRange[1]])} className="w-full" />
//               <div className="flex justify-between text-sm">
//                 <span>${selectedPriceRange[0]}</span>
//                 <span>${selectedPriceRange[1]}</span>
//               </div>
//             </div>

//             {/* Colors Filter */}
//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Colors</h3>
//               <div className="flex flex-wrap gap-2">
//                 {colors.map(color => (
//                   <div key={color} className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? "border-black" : "border-gray-300"}`} 
//                     style={{ backgroundColor: color }} onClick={() => toggleColor(color)} />
//                 ))}
//               </div>
//             </div>

//             {/* Size Filter */}
//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Size</h3>
//               <div className="grid grid-cols-3 gap-2">
//                 {sizes.map(size => (
//                   <button key={size} onClick={() => toggleSize(size)} 
//                     className={`py-1 px-2 border rounded-3xl text-sm ${selectedSize === size ? "bg-gray-300" : "text-gray-600"} hover:bg-gray-200`}>
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Dress Style Filter */}
//             <div className="mb-4">
//               <h3 className="text-lg font-bold mb-2">Dress Style</h3>
//               <ul className="space-y-2">
//                 {styles.map(style => (
//                   <li key={style} className="text-gray-600 cursor-pointer hover:underline" onClick={() => toggleStyle(style)}>
//                     {style}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>

//           {/* Products Display */}
//           <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {filteredProducts.map(item => (
//                 <div key={item._id} className="relative group border rounded-lg shadow-md hover:shadow-lg transition duration-200 overflow-hidden">
//                   <Link href={`/product/${item.slug?.current}`}>
//                     {item.image && (
//                       <Image src={urlFor(item.image).url()} alt={item.name || "Product Image"} width={300} height={300} className="object-cover rounded-t-lg" />
//                     )}
//                     <div className="p-4">
//                       <h2 className="text-lg font-semibold mb-2 text-center">{item.name}</h2>
//                       <div className="text-center text-gray-500 mb-2"><span className="text-yellow-400">★★★★☆</span> 4.5/5</div>
//                       <p className="text-lg font-bold text-black text-center">${item.price - ((item.discountPercent || 0) / 100) * item.price}</p>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Pagination />
//       </div>
//     </div>
//   );
// };

// export default CasualPage;





