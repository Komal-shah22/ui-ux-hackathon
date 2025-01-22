
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

          <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
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





// 'use client'
// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import { useState } from "react";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";

// interface Product {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   description: string;
//   title: string;
//   rating: number;
//   reviews: number;
//   colors: { name: string; hex: string }[];
//   sizes: string[];
// }

// const ProductPage = ({ product }: { product: Product }) => {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const colors = product.colors;
//   const sizes = product.sizes;

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div><ul className="flex gap-4 mb-10">
//         <li className="flex mt-2">Home <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2">Shop <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2">Men <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2 font-semibold">{product.title} <RiArrowRightSLine className="mt-2"/></li>
//       </ul></div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {product.title}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">{product.rating}/5</span>
//             <span className="text-gray-500">({product.reviews} Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${product.price}
//             </span>
//             {product.originalPrice && (
//               <span className="line-through text-gray-500">${product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="text-green-600 font-medium">{product.discount}</span>
//             )}
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             {product.description}
//           </p>

//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Select Colors</h3>
//             <div className="flex space-x-2 flex-wrap">
//               {colors.map((color) => (
//                 <div
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color.name
//                       ? "border-black"
//                       : "border-gray-300"
//                   } cursor-pointer`}
//                   style={{ backgroundColor: color.hex }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg ${
//                     selectedSize === size
//                       ? "border-black text-black"
//                       : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <button
//               onClick={decreaseQuantity}
//               className="px-4 py-2 border rounded-l-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               -
//             </button>
//             <span className="px-4 py-2 border-t border-b">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-4 py-2 border rounded-r-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               +
//             </button>
//           </div>

//           <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-12 border-b pt-6">
//         <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
//           <li className="cursor-pointer hover:text-black">
//             Product Details
//           </li>
//           <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
//             Rating & Reviews
//           </li>
//           <li className="cursor-pointer hover:text-black">FAQs</li>
//         </ul>
//       </div>
//       <div className="mt-12 flex flex-wrap justify-between items-center">
//         <div>
//           <h1 className="text-lg md:text-xl font-semibold mb-2">
//             All Reviews <span className="text-gray-500">({product.reviews})</span>
//           </h1>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
//             <Image src={vector3} alt="vector" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const productId = params?.id;

//   // Fetch product data based on the productId (you can replace this with an API call)
//   const product = {
//     id: productId,
//     title: "ONE LIFE GRAPHIC T-SHIRT",
//     rating: 4.5,
//     reviews: 456,
//     price: 260,
//     originalPrice: 300,
//     discount: "-40%",
//     description: "This graphic t-shirt, perfect for any occasion, is crafted from soft and breathable fabric. It offers superior comfort and style.",
//     colors: [
//       { name: "Black", hex: "#314f4B" },
//       { name: "Green", hex: "#314F4A" },
//       { name: "Red", hex: "#31344F" }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//   };

//   return {
//     props: { product },
//   };
// };

// export default ProductPage;





// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import { useState } from "react";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";


// interface Product {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   description: string;
//   title:string;
//   rating: number;
//   reviews: number;
//   colors: { name: string; hex: string }[];
//   sizes: string[];
// }


// interface Product {
//   const ProductPage = ({ product }:{product:Product}) => {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const colors = product.colors;
//   const sizes = product.sizes;

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div><ul className="flex gap-4 mb-10">
//         <li className="flex mt-2">Home <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2">Shop <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2">Men <RiArrowRightSLine className="mt-2"/></li>
//         <li className="flex mt-2 font-semibold">{product.title} <RiArrowRightSLine className="mt-2"/></li>
//       </ul></div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {product.title}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">{product.rating}/5</span>
//             <span className="text-gray-500">({product.reviews} Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${product.price}
//             </span>
//             {product.originalPrice && (
//               <span className="line-through text-gray-500">${product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="text-green-600 font-medium">{product.discount}</span>
//             )}
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             {product.description}
//           </p>

//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Select Colors</h3>
//             <div className="flex space-x-2 flex-wrap">
//               {colors.map((color) => (
//                 <div
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color.name
//                       ? "border-black"
//                       : "border-gray-300"
//                   } cursor-pointer`}
//                   style={{ backgroundColor: color.hex }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg ${
//                     selectedSize === size
//                       ? "border-black text-black"
//                       : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <button
//               onClick={decreaseQuantity}
//               className="px-4 py-2 border rounded-l-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               -
//             </button>
//             <span className="px-4 py-2 border-t border-b">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-4 py-2 border rounded-r-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               +
//             </button>
//           </div>

//           <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-12 border-b pt-6">
//         <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
//           <li className="cursor-pointer hover:text-black">
//             Product Details
//           </li>
//           <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
//             Rating & Reviews
//           </li>
//           <li className="cursor-pointer hover:text-black">FAQs</li>
//         </ul>
//       </div>
//       <div className="mt-12 flex flex-wrap justify-between items-center">
//         <div>
//           <h1 className="text-lg md:text-xl font-semibold mb-2">
//             All Reviews <span className="text-gray-500">({product.reviews})</span>
//           </h1>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
//             <Image src={vector3} alt="vector" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const productId = params?.id;

//   // Fetch product data based on the productId (you can replace this with an API call)
//   const product = {
//     id: productId,
//     title: "ONE LIFE GRAPHIC T-SHIRT",
//     rating: 4.5,
//     reviews: 456,
//     price: 260,
//     originalPrice: 300,
//     discount: "-40%",
//     description: "This graphic t-shirt, perfect for any occasion, is crafted from soft and breathable fabric. It offers superior comfort and style.",
//     colors: [
//       { name: "Black", hex: "#314f4B" },
//       { name: "Green", hex: "#314F4A" },
//       { name: "Red", hex: "#31344F" }
//     ],
//     sizes: ["S", "M", "L", "XL"],
//   };

//   return {
//     props: { product },
//   };
// };

// export default ProductPage;





// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";

// export async function getStaticPaths() {
//   // Fetch all product IDs or slugs
//   const res = await fetch('https://api.example.com/products');
//   const products = await res.json();

//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch product details based on ID
//   const res = await fetch(`https://api.example.com/products/${params.id}`);
//   const product = await res.json();

//   return { props: { product } };
// }

// export default function ProductPage({ product }) {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div>
//         <ul className="flex gap-4 mb-10">
//           <li className="flex mt-2">
//             Home <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2">
//             Shop <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             {product.category} <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             {product.name} <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery images={product.images} />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {product.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">{product.rating}/5</span>
//             <span className="text-gray-500">({product.reviewsCount} Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${product.price}
//             </span>
//             {product.oldPrice && (
//               <>
//                 <span className="line-through text-gray-500">
//                   ${product.oldPrice}
//                 </span>
//                 <span className="text-green-600 font-medium">
//                   -{product.discount}%
//                 </span>
//               </>
//             )}
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             {product.description}
//           </p>

//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Select Colors</h3>
//             <div className="flex space-x-2 flex-wrap">
//               {product.colors.map((color:any) => (
//                 <div
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color.name
//                       ? "border-black"
//                       : "border-gray-300"
//                   } cursor-pointer`}
//                   style={{ backgroundColor: color.hex }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((size:any) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg ${
//                     selectedSize === size
//                       ? "border-black text-black"
//                       : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <button
//               onClick={decreaseQuantity}
//               className="px-4 py-2 border rounded-l-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               -
//             </button>
//             <span className="px-4 py-2 border-t border-b">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-4 py-2 border rounded-r-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               +
//             </button>
//           </div>

//           <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-12 border-b pt-6">
//         <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
//           <li className="cursor-pointer hover:text-black">Product Details</li>
//           <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
//             Rating & Reviews
//           </li>
//           <li className="cursor-pointer hover:text-black">FAQs</li>
//         </ul>
//       </div>
//       <div className="mt-12 flex flex-wrap justify-between items-center">
//         <div>
//           <h1 className="text-lg md:text-xl font-semibold mb-2">
//             All Reviews <span className="text-gray-500">({product.reviewsCount})</span>
//           </h1>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
//             <Image src={vector3} alt="vector" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiArrowRightSLine } from "react-icons/ri";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";

// export async function getStaticPaths() {
//   // Fetch all product IDs or slugs
//   const res = await fetch('https://api.example.com/products');
//   const products = await res.json();

//   const paths = products.map((product) => ({
//     params: { id: product.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch product details based on ID
//   const res = await fetch(`https://api.example.com/products/${params.id}`);
//   const product = await res.json();

//   return { props: { product } };
// }

// export default function ProductPage({ product }) {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div>
//         <ul className="flex gap-4 mb-10">
//           <li className="flex mt-2">
//             Home <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2">
//             Shop <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             {product.category} <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             {product.name} <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery images={product.images} />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {product.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">{product.rating}/5</span>
//             <span className="text-gray-500">({product.reviewsCount} Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${product.price}
//             </span>
//             {product.oldPrice && (
//               <>
//                 <span className="line-through text-gray-500">
//                   ${product.oldPrice}
//                 </span>
//                 <span className="text-green-600 font-medium">
//                   -{product.discount}%
//                 </span>
//               </>
//             )}
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             {product.description}
//           </p>

//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Select Colors</h3>
//             <div className="flex space-x-2 flex-wrap">
//               {product.colors.map((color) => (
//                 <div
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color.name
//                       ? "border-black"
//                       : "border-gray-300"
//                   } cursor-pointer`}
//                   style={{ backgroundColor: color.hex }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg ${
//                     selectedSize === size
//                       ? "border-black text-black"
//                       : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <button
//               onClick={decreaseQuantity}
//               className="px-4 py-2 border rounded-l-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               -
//             </button>
//             <span className="px-4 py-2 border-t border-b">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-4 py-2 border rounded-r-3xl bg-gray-100 hover:bg-gray-200"
//             >
//               +
//             </button>
//           </div>

//           <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-12 border-b pt-6">
//         <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
//           <li className="cursor-pointer hover:text-black">Product Details</li>
//           <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
//             Rating & Reviews
//           </li>
//           <li className="cursor-pointer hover:text-black">FAQs</li>
//         </ul>
//       </div>
//       <div className="mt-12 flex flex-wrap justify-between items-center">
//         <div>
//           <h1 className="text-lg md:text-xl font-semibold mb-2">
//             All Reviews <span className="text-gray-500">({product.reviewsCount})</span>
//           </h1>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
//             <Image src={vector3} alt="vector" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
