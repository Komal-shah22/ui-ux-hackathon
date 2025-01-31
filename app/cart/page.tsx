"use client"; 
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Product } from '@/types/products';
import { getCartItem, removeFromCart, updateCartQuantity } from '../action/action';
import Swal from 'sweetalert2';
import { urlFor } from '@/sanity/lib/image';
import emptyCartIcon from '../../public/empty-carticon.png'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItem());
  }, []);

  const handleQuantityChange = (id: string, type: "increment" | "decrement") => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      const newQuantity = type === "increment" ? product.inventory + 1 : product.inventory - 1;
      if (newQuantity > 0) {
        updateCartQuantity(id, newQuantity);
        setCartItems(getCartItem());
      }
    }
  };

  const handleRemoveItem = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItem());
        Swal.fire('Removed!', 'Item has been removed', 'success');
      }
    });
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const discount = 0.2 * subtotal;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen pb-10 py-10 bg-gray-100 mb-10">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 mb-4">Home &gt; Cart</div>
        <h1 className="text-3xl font-extrabold mb-6 text-center lg:text-left">YOUR CART</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20">
                      {item.image && (
                        <Image src={urlFor(item.image).url()} alt={item.name} width={60} height={60} className="object-cover rounded-md" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-500 text-sm">${item.price} / each</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-3 py-2 text-gray-600 hover:bg-gray-200" onClick={() => handleQuantityChange(item._id, "decrement")}>-</button>
                      <span className="px-4 py-2">{item.inventory}</span>
                      <button className="px-3 py-2 text-gray-600 hover:bg-gray-200" onClick={() => handleQuantityChange(item._id, "increment")}>+</button>
                    </div>
                    <p className="font-semibold">${item.price * item.inventory}</p>
                    <button className="text-red-500 hover:text-red-700 mt-3 md:mt-0" onClick={() => handleRemoveItem(item._id)}>
                      <MdDelete className="text-3xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Discount (-20%)</span><span className="font-semibold text-red-500">-${discount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Delivery Fee</span><span className="font-semibold">${deliveryFee.toFixed(2)}</span></div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-xl font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
              <div className="mt-4">
                <input type="text" placeholder="Add promo code" className="w-full border rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-300" />
                <button className="w-full bg-black text-white py-2 mt-2 rounded-lg hover:bg-gray-800 transition">Apply</button>
              </div>
              <Link href='/checkout'>
                <button className="w-full bg-black text-white py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">Go to Checkout →</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <Image src={emptyCartIcon} width={300} height={300} alt="Empty Cart" className="mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
            <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/onsales">
              <button className="mt-4 px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">Continue Shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
