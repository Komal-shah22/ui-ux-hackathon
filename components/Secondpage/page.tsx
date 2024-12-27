
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






// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { FaShoppingCart } from "react-icons/fa";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";

// export default function ProductPage() {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0); // Cart item count

//   const colors = [
//     { name: "Black", hex: "#314f4B" },
//     { name: "Green", hex: "#314F4A" },
//     { name: "Red", hex: "#31344F" },
//   ];

//   const sizes = ["S", "M", "L", "XL"];

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const addToCart = () => {
//     setCartCount(cartCount + quantity); // Increment cart count by the selected quantity
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       {/* Navbar or Cart Icon Section */}
//       <div className="flex justify-end items-center mb-6">
//         <div className="relative">
//           <FaShoppingCart className="text-2xl" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {cartCount}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />
//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             ONE LIFE GRAPHIC T-SHIRT
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               $260
//             </span>
//             <span className="line-through text-gray-500">$300</span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
//           </p>

//           {/* Select Color */}
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

//           {/* Select Size */}
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

//           {/* Quantity Selector */}
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

//           {/* Add to Cart Button */}
//           <button
//             onClick={addToCart}
//             className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";

// export default function ProductPage() {
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);
//   const [showReviewModal, setShowReviewModal] = useState(false);

//   const colors = [
//     { name: "Black", hex: "#314f4B" },
//     { name: "Green", hex: "#314F4A" },
//     { name: "Red", hex: "#31344F" },
//   ];

//   const sizes = ["S", "M", "L", "XL"];

//   const decreaseQuantity = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//     alert("Item added to cart!");
//   };

//   const writeReview = () => {
//     setShowReviewModal(true);
//   };

//   const closeReviewModal = () => {
//     setShowReviewModal(false);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       {/* Breadcrumb */}
//       <div>
//         <ul className="flex gap-4 mb-10">
//           <li className="flex mt-2 cursor-pointer" onClick={() => alert("Navigating to Home")}>
//             Home <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 cursor-pointer" onClick={() => alert("Navigating to Shop")}>
//             Shop <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 cursor-pointer" onClick={() => alert("Navigating to Men")}>
//             Men <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold cursor-pointer" onClick={() => alert("Navigating to T-shirts")}>
//             T-shirts <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>

//       {/* Product Info */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             ONE LIFE GRAPHIC T-SHIRT
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               $260
//             </span>
//             <span className="line-through text-gray-500">$300</span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
//           </p>

//           {/* Color Selection */}
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

//           {/* Size Selection */}
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

//           {/* Quantity Selector */}
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

//           {/* Add to Cart Button */}
//           <button
//             onClick={addToCart}
//             className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
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
//             All Reviews <span className="text-gray-500">(451)</span>
//           </h1>
//         </div>
//         <div className="flex gap-4 flex-wrap">
//           <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
//             <Image src={vector3} alt="vector" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button
//             onClick={writeReview}
//             className="bg-black text-white rounded-3xl px-4 py-2"
//           >
//             Write a Review
//           </button>
//         </div>
//       </div>

//       {/* Review Modal */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-1/2">
//             <h2 className="text-lg font-semibold mb-4">Write a Review</h2>
//             <textarea
//               className="w-full border rounded-lg p-4"
//               placeholder="Share your experience..."
//             />
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={closeReviewModal}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
//               >
//                 Cancel
//               </button>
//               <button className="bg-black text-white px-4 py-2 rounded-lg">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Cart Icon Notification */}
//       {cartCount > 0 && (
//         <div className="fixed top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
//           {cartCount}
//         </div>
//       )}
//     </div>
//   );
// }

