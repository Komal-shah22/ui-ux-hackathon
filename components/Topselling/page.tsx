// import React from "react";
// import ProductCard from "@/components/ProductCard/page"; 

// const Topselling= () => {
//   const products = [
//     {
//       id: 1,
//       image: "/greenshirt.png", 
//       title: "VERTICAL STRIPED SHIRT",
//       price: 120,
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       image: "/orangeshirt.png", 
//       title: "COURAGE GRAPHIC T-SHIRT",
//       price: 240,
//       originalPrice: 260,
//       discount: "-20%",
//       rating: 3.5,
//     },
//     {
//       id: 3,
//       image: "/shorts.png", 
//       title: "LOOSE FIT BERMUDA SHORTS",
//       price: 180,
//       rating: 4.5,
//     },
//     {
//       id: 4,
//       image: "/pant.png", 
//       title: "FADED SKINNY JEANS",
//       price: 130,
//       originalPrice: 160,
//       discount: "-30%",
//       rating: 4.5,
//     },
//   ];

//   return (
//     <div className="bg-white py-10">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-extrabold text-center mb-8 ">TOP SELLING</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <ProductCard key={index} {...product} />
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button className="bg-white border-gray-500 border-2 text-black px-14 py-3 rounded-3xl shadow-lg hover:bg-black hover:text-white">
//             View All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topselling;







// import React from "react";
// import ProductCard from "@/components/ProductCard/page";

// const Topselling = () => {
//   const products = [
//     {
//       id: 1,
//       image: "/greenshirt.png",
//       title: "VERTICAL STRIPED SHIRT",
//       price: 120,
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       image: "/orangeshirt.png",
//       title: "COURAGE GRAPHIC T-SHIRT",
//       price: 240,
//       originalPrice: 260,
//       discount: "-20%",
//       rating: 3.5,
//     },
//     {
//       id: 3,
//       image: "/shorts.png",
//       title: "LOOSE FIT BERMUDA SHORTS",
//       price: 180,
//       rating: 4.5,
//     },
//     {
//       id: 4,
//       image: "/pant.png",
//       title: "FADED SKINNY JEANS",
//       price: 130,
//       originalPrice: 160,
//       discount: "-30%",
//       rating: 4.5,
//     },
//   ];
//   return (
//     <div className="bg-white py-10">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-extrabold text-center mb-8">TOP SELLING</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button className="bg-white border-gray-500 border-2 text-black px-14 py-3 rounded-3xl shadow-lg hover:bg-black hover:text-white">
//             View All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topselling;






import React from "react";
import ProductCard from "@/components/ProductCard/page";

const Topselling = () => {
  const products = [
    {
      id: 1,
      image: "/greenshirt.png",
      title: "VERTICAL STRIPED SHIRT",
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      image: "/orangeshirt.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: 240,
      originalPrice: 260,
      discount: "-20%",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/shorts.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: 180,
      rating: 4.5,
    },
    {
      id: 4,
      image: "/pant.png",
      title: "FADED SKINNY JEANS",
      price: 130,
      originalPrice: 160,
      discount: "-30%",
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-8">TOP SELLING</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white border-gray-500 border-2 text-black px-14 py-3 rounded-3xl shadow-lg hover:bg-black hover:text-white transition-all duration-200">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topselling;



// 'use client'
// import { client } from '@/sanity/lib/client';
// import { allproducts } from '@/sanity/lib/querries';
// import { product } from '@/types/products';
// import React ,{useEffect, useState} from 'react';
// const Topselling = () => {

//   const [product,setProduct] = useState<product>([]);
//   useEffect(()=>{
//     async function fetchProduct(){
//       const fetchedProduct : product[]= await client.fetch(allproducts)
//       setProduct(fetchedProduct)
//     }
//     fetchProduct()
//   },[])

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {product.map((product)=>{
//         return
//       })}

//     </div>
//   )
// }
// export default Topselling


// 'use client';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import { allproducts } from '@/sanity/lib/querries';
// import { Product } from '@/types/products';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Topselling = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//         const fetchedProducts: Product[] = await client.fetch(allproducts);
//         setProducts(fetchedProducts);
//       }
//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Top Selling Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded shadow-md">
//             {product.image &&(
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.productName}
//               width={200}
//               height={200}
//               className="w-full h-48 object-cover rounded mb-4"
//             />)}
//             <h3 className="text-lg font-semibold">{product.productName}</h3>
//             <p className="text-sm text-gray-600">{product.description}</p>
//             <div className="mt-4">
//               <span className="text-xl font-bold text-blue-500">
//                 ${product.price}
//               </span>
//             </div>
//             <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Topselling;




// import { GetServerSideProps } from 'next';
// import { getProducts } from '../../types/products'; // Adjust the path

// const ProductsPage = ({ products }: { products: any[] }) => {
//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product._id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//           {product.image && <img src={product.image.asset.url} alt={product.name} />}
//           <p>Category: {product.category}</p>
//           <p>Discount: {product.discountPercent}%</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products = await getProducts();
//   return {
//     props: { products },
//   };
// };

// export default ProductsPage;

