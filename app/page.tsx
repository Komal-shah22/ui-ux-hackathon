import Hero from "@/components/Hero/page";
import ProductList from "@/components/ProductList/page";
import Topselling from "@/components/Topselling/page";
import Dress from "@/components/Dress/page";
import Reviews from "@/components/Reviews/page";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Topselling />
      <Dress />
      <Reviews />
      <ToastContainer />
    </div>
  );
};

export default Home;
