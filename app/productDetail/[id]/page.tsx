
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Gallery from "@/components/Galery/page";
import vector3 from "@/public/Vector (3).png";
import { RiArrowRightSLine } from "react-icons/ri";
import SecondReview from "@/components/SecondReview/page";
import Brands from "@/components/Sales/page";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    discountPrice: 300,
    description:
      "This graphic t-shirt, perfect for any occasion, is crafted from soft and breathable fabric. It offers superior comfort and style.",
    reviewsCount: 456,
    images: ["/cartshirt.png", "/cartshirt2.png", "/cartshirt.png"],
  },
    {
    id: 2,
    name: "VERTICAL STRIPED SHIRT",
    price: 120,
    discountPrice: 400,
    description:
      "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
    reviewsCount: 324,
    images: ["/greenshirt.png", "/greenshirt.png", "/orangeshirt.png"],
  },
  {
    id: 3,
    images: ["/orangeshirt.png", "/greenshirt.png", "/cartshirt.png"],
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
    images: ["/shorts.png", "/orangeshirt.png", "/cartshirt.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    originalPrice: 800,
    description:
      "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
    reviewsCount: 324,
    price: 180,
    rating: 4.5,
  },
  {
    id: 5,
    images: ["/pant.png", "/greenshirt.png", "/orangeshirt.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    description:
      "A stylish vertical striped shirt that combines elegance and comfort. Perfect for formal or casual occasions.",
    reviewsCount: 324,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: 6,
    images: ["/whiteshirt.png", "/pant.png", "/pinkshirt.png"],
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
  },
  {
    id: 7,
    images: ["/pinkshirt.png", "/blackshirt.png", "/whiteshirt.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 180,
    rating: 4.5,
  },
  {
    id: 8,
    images: ["/blackshirt.png", "/cartshirt.png", "/whiteshirt.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: 9,
    images: ["/cartshirt.png", "/jeans.png", "/cartshirt.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: 10,
    images: ["/jeans.png", "/jeans.png", "/shorts.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 180,
    rating: 4.5,
  },
  {
    id: 11,
    images: ["/shorts.png", "/blueshirt.png", "/shorts.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: 12,
    images: ["/blueshirt.png", "/blueshirt.png", "/shorts.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 180,
    rating: 4.5,
  },
  {
    id: 13,
    images: ["/greenshirt.png", "/jeans.png", "/blueshirt.png"],
    name: "FADED SKINNY JEANS",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },
  {
    id: 14,
    images: ["/jeans.png", "/jeans.png", "/cartshirt.png"],
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 180,
    rating: 4.5,
  },
  {
    id: 15,
    images: ["/t-shirt.png", "/blackshirt.png", "/whiteshirt.png"],
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
  },
  {
    id: 16,
    images: ["/jeans.png", "/jeans.png", "/cartshirt.png"],
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: "-20%",
    rating: 3.5,
  },
  {
    id: 17,
    images: ["/shirt.png", "/greenshirt.png", "/orangeshirt.png"],
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
  },
  {
    id: 18,
    images: ["/sweat-shirt.png", "/blackshirt.png", "/whiteshirt.png"],
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: "-30%",
    rating: 4.5,
  },

];

export default function ProductPage() {
  const { id } = useParams();
  const item = products.find((product:any) => product.id === Number(id));
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);  // For cart count

  if (!item) {
    return (
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center my-20">
          Product not found
        </h1>
      </div>
    );
  }

  const colors = [
    { name: "Nevyblue", hex: "#001F3F" },
    { name: "Green", hex: "#556B2F" },
    { name: "Cyan", hex: "#E0FFFF" },
  ];

  const sizes = ["S", "M", "L", "XL"];
  
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <>
      <Head>
        <title>{item.name} | Your Store</title>
        <meta
          name="description"
          content={`Buy ${item.name} now for only $${item.price}. Perfect for any occasion.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav aria-label="breadcrumb">
          <ul className="flex gap-4 mb-10 text-sm text-gray-600">
            <li className="flex items-center">Home <RiArrowRightSLine className="mx-2" /></li>
            <li className="flex items-center">Shop <RiArrowRightSLine className="mx-2" /></li>
            <li className="flex items-center">Men <RiArrowRightSLine className="mx-2" /></li>
            <li className="font-semibold">T-shirts</li>
          </ul>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <Gallery images={item.images} />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">{item.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
              <span className="text-gray-500">({item.reviewsCount} Reviews)</span>
            </div>
            <div className="flex items-center mb-6 flex-wrap gap-2">
              <span className="text-2xl font-bold text-gray-800">${item.price}</span>
              {item.discountPrice && (
                <span className="line-through text-gray-500">${item.discountPrice}</span>
              )}
              <span className="text-green-600 font-medium">-40%</span>
            </div>
            <p className="text-base text-gray-600 mb-6">{item.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Colors</h3>
              <div className="flex space-x-2 flex-wrap">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
                    className={`w-8 h-8 rounded-full border-2 transition ${
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
                    className={`px-4 py-2 border rounded-lg transition ${
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
                className="px-4 py-2 border rounded-l-full bg-black text-white hover:bg-gray-800"
              >
                -
              </button>
              <span className="px-4 py-2 border-t border-b">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 border rounded-r-full bg-black text-white hover:bg-gray-800"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              aria-label="Add to Cart"
            >
              Add to Cart
            </button>

          </div>
        </section>
        <section className="mt-12 border-b pt-6">
          <ul className="flex justify-around items-center text-gray-600">
            <li className="cursor-pointer hover:text-black">Product Details</li>
            <li className="cursor-pointer hover:text-black border-b-2 border-black font-semibold">
              Rating & Reviews
            </li>
            <li className="cursor-pointer hover:text-black">FAQs</li>
          </ul>
        </section>

        <section className="mt-12">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              All Reviews{" "}
              <span className="text-gray-500">({item.reviewsCount})</span>
            </h2>
            <div className="flex gap-4">
              <div className="rounded-full bg-slate-200 w-12 h-12 flex justify-center items-center">
                <Image src={vector3} alt="Sort" width={24} height={24} />
              </div>
              <div className="bg-slate-200 rounded-lg px-4 py-2 flex items-center gap-2">
                Latest <IoIosArrowDown />
              </div>
              <button className="bg-black text-white rounded-lg px-4 py-2">
                Write a Review
              </button>
            </div>
          </div>
          <SecondReview />
        </section>

        <Brands />
      </main>

      <ToastContainer />
    </>
  );
}









