// 'use client'
// import { useParams } from "next/navigation";

// const ProductDetail = () => {
//   // const router = useRouter();
//   // const { id } = router.query;
//   const params = useParams();
//   const id = params.id //dynamic id ye se milengii
//   const item = product.find((item)=> item.id === Number(id))
//   if(!item){
//       return <h1>Product not found</h1>
//   }

// interface Iproducts{
//     title:string,
//     price:string,
//     id:number
//     rating?:string,
//     old_price?:string
//     img_url:string
//     img1:string,
//     img2:string,
//     img3:string,
// }


//   // Mock data for demonstration (replace this with API or context data)
//   const products:Iproducts = [
//     {
//       id: 1,
//       image: "/greenshirt.png",
//       title: "VERTICAL STRIPED SHIRT",
//       price: 120,
//       rating: 4.5,
//       description: "A stylish vertical striped shirt perfect for formal and casual wear.",
//     },
//     {
//       id: 2,
//       image: "/orangeshirt.png",
//       title: "COURAGE GRAPHIC T-SHIRT",
//       price: 240,
//       originalPrice: 260,
//       discount: "-20%",
//       rating: 3.5,
//       description: "A bold graphic T-shirt to showcase your courage and style.",
//     },
//     {
//       id: 3,
//       image: "/shorts.png",
//       title: "LOOSE FIT BERMUDA SHORTS",
//       price: 180,
//       rating: 4.5,
//       description: "Comfortable Bermuda shorts for daily activities and lounging.",
//     },
//     {
//       id: 4,
//       image: "/pant.png",
//       title: "FADED SKINNY JEANS",
//       price: 130,
//       originalPrice: 160,
//       discount: "-30%",
//       rating: 4.5,
//       description: "Trendy faded skinny jeans suitable for all occasions.",
//     },
//   ];

//   const product = products.find((product) => product.id === parseInt(id as string));

//   if (!product) return <p>Product not found!</p>;

//   return (
//     <div className="container mx-auto py-10">
//       <div className="flex flex-col md:flex-row items-center">
//         <img src={product.image} alt={product.title} className="w-1/2 rounded-lg" />
//         <div className="ml-6">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-500 mt-2">Price: ${product.price}</p>
//           {product.discount && <p className="text-red-500">{product.discount}</p>}
//           <p className="mt-4">{product.description}</p>
//           <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;





// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";
// import SecondReview from "@/components/SecondReview/page"
// import Brands from "@/components/Sales/page";


// export default function ProductPage() {
//   const id = params.id //dynamic id ye se milengii
//   const item = products.find((item)=> item.id === Number(id))
//   if(!item){
//       return <h1>Product not found</h1>
//   }

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

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

//   return (
//     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       <div><ul className="flex gap-4 mb-10">
//       <li className="flex mt-2">Home <RiArrowRightSLine className="mt-2"/></li>
//       <li className="flex mt-2">Shop <RiArrowRightSLine className="mt-2"/></li>
//       <li className="flex mt-2">Men <RiArrowRightSLine className="mt-2"/></li>
//       <li className="flex mt-2 font-semibold">T-shirts <RiArrowRightSLine className="mt-2"/></li>
//       </ul></div>
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
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//       <SecondReview />
//       <Brands />
//     </div>
//   );
// }





// 'use client';
// import { useState } from "react";
// import { useParams } from "next/navigation"; // Use useParams for app directory
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";
// import SecondReview from "@/components/SecondReview/page";
// import Brands from "@/components/Sales/page";

// const products = [
//   {
//     id: 1,
//     name: "ONE LIFE GRAPHIC T-SHIRT",
//     price: 260,
//     discountPrice: 300,
//     images: ["/cartshirt.png", "/cartshirt2.png", "/cartshirt3.png"], // Add product-specific images
//   },
//   {
//     id: 2,
//     name: "VERTICAL STRIPED SHIRT",
//     price: 120,
//     discountPrice: 400,
//     images: ["/greenshirt.png", "/greenshirt2.png", "/greenshirt3.png"],
//   },
// ];


// export default function ProductPage() {
//   const { id } = useParams(); // Fetch id using useParams

//   const item = products.find((item) => item.id === Number(id));

//   if (!item) {
//     return <h1>Product not found</h1>;
//   }

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

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
//           <li className="flex mt-2">
//             Men <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             T-shirts <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {item.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${item.price}
//             </span>
//             <span className="line-through text-gray-500">
//               ${item.discountPrice}
//             </span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
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
//             <Image src={vector3} alt="Sort vector icon" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//       <SecondReview />
//       <Brands />
//     </div>
//   );
// }






'use client';
import { useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for app directory
import Head from "next/head";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Gallery from "@/components/Galery/page"; // Ensure this component supports dynamic images
import vector3 from "@/public/Vector (3).png";
import { RiArrowRightSLine } from "react-icons/ri";
import SecondReview from "@/components/SecondReview/page";
// import Brands from "@/components/Sales/page";

const products = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    discountPrice: 300,
    description:
      "This graphic t-shirt, perfect for any occasion, is crafted from soft and breathable fabric. It offers superior comfort and style.",
    reviewsCount: 456,
    images: ["/cartshirt.png", "/cartshirt2.png", "/cartshirt3.png"],
  },
  {
    id: 2,
    name: "VERTICAL STRIPED SHIRT",
    price: 120,
    discountPrice: 400,
    description:
      "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
    reviewsCount: 324,
    images: ["/greenshirt.png", "/greenshirt2.png", "/orangeshirt.png"],
  },
  {
    id: 3,
    images: ["/orangeshirt.png","/greenshirt.png","/cartshirt.png"],
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 240,
    originalPrice: 260,
    description:
    "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
  reviewsCount: 324,
    discount: "-20%",
    rating: 3.5,
  },
  {
    id: 4,
    images: ["/shorts.png","/orangeshirt.png","/cartshirt.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    originalPrice:800,
    description:
    "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
  reviewsCount: 324,
    price: 180,
    rating: 4.5,
  },
  {
    id: 5,
    images: ["/pant.png","/greenshirt.png","/orangeshirt.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    description:
    "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
  reviewsCount: 324,
    discount: "-30%",
    rating: 4.5,
  },

];

export default function ProductPage() {
  const { id } = useParams(); // Fetch id using useParams
  const item = products.find((product) => product.id === Number(id));

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrbold text-center mb-20 mt-20">Product not found</h1>
      </div>
    );
  }

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Green", hex: "#008000" },
    { name: "Red", hex: "#FF0000" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>{item.name} | Your Store</title>
        <meta
          name="description"
          content={`Buy ${item.name} now for only $${item.price}. Perfect for any occasion.`}
        />
      </Head>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div>
          <ul className="flex gap-4 mb-10">
            <li className="flex mt-2">
              Home <RiArrowRightSLine className="mt-2" />
            </li>
            <li className="flex mt-2">
              Shop <RiArrowRightSLine className="mt-2" />
            </li>
            <li className="flex mt-2">
              Men <RiArrowRightSLine className="mt-2" />
            </li>
            <li className="flex mt-2 font-semibold">
              T-shirts <RiArrowRightSLine className="mt-2" />
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dynamic Gallery */}
          <Gallery images={item.images} />

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              {item.name}
            </h1>
            <div className="flex items-center mb-4 text-sm md:text-base">
              <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
              <span className="text-gray-500">({item.reviewsCount} Reviews)</span>
            </div>
            <div className="flex items-center mb-6 flex-wrap gap-2">
              <span className="text-lg md:text-2xl font-bold text-gray-800">
                ${item.price}
              </span>
              <span className="line-through text-gray-500">
                ${item.discountPrice}
              </span>
              <span className="text-green-600 font-medium">-40%</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              {item.description}
            </p>

            {/* Select Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Colors</h3>
              <div className="flex space-x-2 flex-wrap">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
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

            {/* Choose Size */}
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

            {/* Quantity Selector */}
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

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 border-b pt-6">
          <ul className="flex flex-wrap space-x-6 text-gray-600 justify-around items-center">
            <li className="cursor-pointer hover:text-black">Product Details</li>
            <li className="cursor-pointer hover:text-black border-b-2 border-black text-black font-semibold">
              Rating & Reviews
            </li>
            <li className="cursor-pointer hover:text-black">FAQs</li>
          </ul>
        </div>
        <div className="mt-12 flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-lg md:text-xl font-semibold mb-2">
              All Reviews <span className="text-gray-500">({item.reviewsCount})</span>
            </h1>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="rounded-full bg-slate-200 w-[48px] h-[48px] flex justify-center items-center">
              <Image
                src={vector3}
                alt="Sort vector icon"
                width={24}
                height={24}
              />
            </div>
            <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
              Latest <IoIosArrowDown className="mt-1" />
            </div>
            <button className="bg-black text-white rounded-3xl px-4 py-2">
              Write a Review
            </button>
          </div>
        </div>
        <SecondReview />
        <Brands />
      </div>
    </>
  );
}





// 'use client';
// import { useState } from "react";
// import { useParams } from "next/navigation";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import SecondReview from "@/components/SecondReview/page";
// import Brands from "@/components/Sales/page";
// import { RiArrowRightSLine } from "react-icons/ri";

// const products = [
//   {
//     id: 1,
//     name: "ONE LIFE GRAPHIC T-SHIRT",
//     price: 260,
//     discountPrice: 300,
//     images: ["/cartshirt.png", "/cartshirt2.png", "/cartshirt3.png"], // Add product-specific images
//   },
//   {
//     id: 2,
//     name: "VERTICAL STRIPED SHIRT",
//     price: 120,
//     discountPrice: 400,
//     images: ["/greenshirt.png", "/greenshirt2.png", "/greenshirt3.png"],
//   },
// ];

// export default function ProductPage() {
//   const { id } = useParams();
//   const item = products.find((item) => item.id === Number(id));

//   if (!item) {
//     return <h1>Product not found</h1>;
//   }

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
//           <li className="flex mt-2">
//             Men <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             T-shirts <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Pass dynamic images */}
//         <Gallery images={item.images} />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {item.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${item.price}
//             </span>
//             <span className="line-through text-gray-500">
//               ${item.discountPrice}
//             </span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
//           </p>

//           <button className="w-full bg-black text-white py-3 rounded-3xl hover:bg-black hover:text-white transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <SecondReview />
//       <Brands />
//     </div>
//   );
// }





// 'use client';
// import { useState } from "react";
// import { useParams } from "next/navigation"; // Use useParams for app directory
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";
// import SecondReview from "@/components/SecondReview/page";
// import Brands from "@/components/Sales/page";

// const products = [
//   {
//     id: 1,
//     name: "ONE LIFE GRAPHIC T-SHIRT",
//     price: 260,
//     discountPrice: 300,
//   },
//   {
//     id: 2,
//     image: "/greenshirt.png",
//     name: "VERTICAL STRIPED SHIRT",
//     discountPrice: 400,
//     price: 120,
//     rating: 4.5,
//   },

//   // Add more products here
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Fetch id using useParams

//   const item = products.find((item) => item.id === Number(id));

//   if (!item) {
//     return <h1>Product not found</h1>;
//   }

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

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
//           <li className="flex mt-2">
//             Men <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             T-shirts <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="relative w-full h-96">
//           <Image
//             src={item.image}
//             alt={item.name}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {item.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${item.price}
//             </span>
//             <span className="line-through text-gray-500">
//               ${item.discountPrice}
//             </span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
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

//       <SecondReview />
//       <Brands />
//     </div>
//   );
// }







// 'use client';
// import { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import Gallery from "@/components/Galery/page";
// import vector3 from "@/public/Vector (3).png";
// import { RiArrowRightSLine } from "react-icons/ri";
// import SecondReview from "@/components/SecondReview/page";
// import Brands from "@/components/Sales/page";

// const products = [
//   { id: 1, name: "ONE LIFE GRAPHIC T-SHIRT", price: 260, discountPrice: 300 },
//   // Add more products here
// ];

// export default function ProductPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const item = products.find((item) => item.id === Number());

//   if (!item) {
//     return <h1>Product not found</h1>;
//   }

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

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
//           <li className="flex mt-2">
//             Men <RiArrowRightSLine className="mt-2" />
//           </li>
//           <li className="flex mt-2 font-semibold">
//             T-shirts <RiArrowRightSLine className="mt-2" />
//           </li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Gallery />

//         <div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
//             {item.name}
//           </h1>
//           <div className="flex items-center mb-4 text-sm md:text-base">
//             <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//             <span className="text-gray-500">(456 Reviews)</span>
//           </div>
//           <div className="flex items-center mb-6 flex-wrap gap-2">
//             <span className="text-lg md:text-2xl font-bold text-gray-800">
//               ${item.price}
//             </span>
//             <span className="line-through text-gray-500">
//               ${item.discountPrice}
//             </span>
//             <span className="text-green-600 font-medium">-40%</span>
//           </div>
//           <p className="text-sm md:text-base text-gray-600 mb-6">
//             This graphic t-shirt, perfect for any occasion, is crafted from soft
//             and breathable fabric. It offers superior comfort and style.
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
//             <Image src={vector3} alt="Sort vector icon" width={24} height={24} />
//           </div>
//           <div className="bg-slate-200 rounded-3xl px-4 py-2 flex gap-2">
//             Latest <IoIosArrowDown className="mt-1" />
//           </div>
//           <button className="bg-black text-white rounded-3xl px-4 py-2">
//             Write a Review
//           </button>
//         </div>
//       </div>
//       <SecondReview />
//       <Brands />
//     </div>
//   );
// }








