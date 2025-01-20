
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/whiteshirt.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/greenshirt.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/jeans.png",
    },
  ]);

  const handleQuantityChange = (id: number, type: "increment" | "decrement") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === "increment" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 0.2 * subtotal;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
  return (
    <div className="min-h-screen pb-0 py-10">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 mb-4">Home &gt; Cart</div>

        <h1 className="text-3xl font-extrabold mb-6">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border rounded">
                    <button
                      className="px-2 py-1 text-gray-600"
                      onClick={() => handleQuantityChange(item.id, "decrement")}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-gray-600"
                      onClick={() => handleQuantityChange(item.id, "increment")}
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                  <button className="text-red-500 " onClick={() => handleRemoveItem(item.id)}>
                  <MdDelete className="text-red-600 text-4xl"/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (-20%)</span>
                <span className="font-semibold text-red-500">-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-semibold">${deliveryFee}</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border rounded-3xl px-4 py-2 text-sm"
              />
              <button className="w-full bg-black text-white py-2 mt-2 rounded-3xl">
                Apply
              </button>
            </div>
            <Link href='/checkout'><button className="w-full bg-black text-white py-3 mt-6 rounded-3xl text-lg font-semibold">
              Go to Checkout →
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


