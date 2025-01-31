"use client"; 
import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItem } from "../action/action";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Checkout = () => {
  const [cartItems, setCartItem] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [, setFormError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  useEffect(() => {
    setCartItem(getCartItem());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormError(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-32">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              {[ 
                { label: "First Name*", placeholder: "First Name", type: "text" },
                { label: "Last Name*", placeholder: "Last Name", type: "text" },
                { label: "Email Address*", placeholder: "Email Address", type: "email" },
                { label: "Phone Number*", placeholder: "Phone Number", type: "text" },
                { label: "Street Address*", placeholder: "Street Address", type: "text" },
                { label: "Town/City*", placeholder: "Town/City", type: "text" },
                { label: "Zip Code*", placeholder: "Zip Code", type: "text" },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    id={field.label.split(" ")[0].toLowerCase()}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save-info" className="h-4 w-4" />
                <label htmlFor="save-info" className="text-gray-700">
                  Save this information for faster checkout next time
                </label>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                    )}
                    <span>{item.name}</span>
                  </div>
                  <span>${item.price}</span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>${discount}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>${subtotal - discount}</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {["Bank Transfer", "Cash on Delivery"].map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="payment"
                    defaultChecked={index === 1}
                  />
                  <label htmlFor={option} className="ml-2">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-black text-white px-2 py-2 rounded-lg w-full sm:w-auto hover:bg-gray-800 transition duration-300">
              Apply Coupon
              </button>

            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Place Order
            </button>
            <Link href="/login">
              <button className="mt-6 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
                Login
              </button>
            </Link>
            <Link
              href="/cart"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

