
"use client";

import React from "react";
import Link from "next/link";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

const AccountForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Show User Button if Signed In */}
        <SignedIn>
          <div className="flex justify-center mb-4">
            <UserButton />
          </div>
        </SignedIn>

        <h2 className="text-2xl font-bold text-center text-black mb-6">
          ACCOUNT
        </h2>

        <SignedOut>
          {/* Show Sign-in Form only if user is Signed Out */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-right mb-6">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Sign-in Button */}
            <div className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition text-center">
              <SignInButton />
            </div>
          </form>
        </SignedOut>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            New to SHOP.CO?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
          <Link href="/signup">
            <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
              CREATE ACCOUNT
            </button>
          </Link>

           <SignedIn>
             <div className="mt-4">
               <SignOutButton>
                 <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
                   Sign Out
                 </button>
               </SignOutButton>
             </div>
           </SignedIn>


        </div>
      </div>
    </div>
  );
};

export default AccountForm;

