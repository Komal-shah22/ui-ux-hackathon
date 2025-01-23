import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-32">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8">
        <div className="text-sm text-gray-600">
          Account / My Account / Product / View Cart /{' '}
          <span className="font-semibold">CheckOut</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              {[
                { label: 'First Name*', placeholder: 'First Name', type: 'text' },
                { label: 'Company Name', placeholder: 'Company Name', type: 'text' },
                { label: 'Street Address*', placeholder: 'Street Address', type: 'text' },
                { label: 'Apartment, floor, etc.', placeholder: 'Optional', type: 'text' },
                { label: 'Town/City*', placeholder: 'Town/City', type: 'text' },
                { label: 'Phone Number*', placeholder: 'Phone Number', type: 'text' },
                { label: 'Email Address*', placeholder: 'Email Address', type: 'email' },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="save-info"
                  className="h-4 w-4 bg-red-500"
                />
                <label htmlFor="save-info" className="text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-4">
              {[
                { name: 'T-shirt', price: 650, img: '/cartshirt.png' },
                { name: 'Jeens', price: 1100, img: '/jeans.png' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                      width={200}
                      height={200}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>${item.price}</span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {['Bank', 'Cash on delivery'].map((option, index) => (
                <div key={index}>
                  <input type="radio" id={option} name="payment" defaultChecked={index === 1} />
                  <label htmlFor={option} className="ml-2">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-4">
                <div className="mt-4 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
                <button className="bg-black text-white px-4 py-1 text-sm md:text-base md:px-6 md:py-3 rounded-lg">
                  Apply Coupon
                </button>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg font-semibold">
                Place Order
              </button>
              <Link href='/login'><button className=" mt-6 w-full bg-black text-white py-2 rounded-lg font-semibold">
                Login
              </button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

