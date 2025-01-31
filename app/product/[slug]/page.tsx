// "use client";
// import { client } from "@/sanity/lib/client";
// import { Product } from "@/types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { useEffect, useState } from "react";
// import { addToCart as addToCartAction } from "../../action/action"; 
// import Swal from 'sweetalert2';
// import Head from "next/head";


// interface ProductPageProps {
//   params: { slug: string };
// }

// async function getProduct(slug: string): Promise<Product | null> {
//   return client.fetch(
//     groq`*[_type == 'product' && slug.current == $slug][0]{
//       _id,
//       name,
//       slug,
//       description,
//       price,
//       discountPrice,
//       reviewsCount,
//       image,
//       colors,
//       sizes,
//       quantity,
//     }`,
//     { slug }
//   );
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchParams = async () => {
//       const resolvedParams = await params; 
//       const { slug } = resolvedParams;

//       if (slug) {
//         async function fetchProduct() {
//           try {
//             const fetchedProduct = await getProduct(slug);
//             setProduct(fetchedProduct);
//           } catch (error) {
//             console.error("Error fetching product:", error);
//           }
//         }
//         fetchProduct();
//       }
//     };
//     fetchParams();
//   }, [params]);

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();

//     if (!selectedColor || !selectedSize) {
//       Swal.fire({
//         position: 'top-start',
//         icon: 'warning',
//         title: 'Please select color and size before adding to the cart.',
//         showConfirmButton: false,
//         timer: 1500
//       });
//       return;
//     }

//     Swal.fire({
//       position: 'top-right',
//       icon: 'success',
//       title: `${product.name} added to cart`,
//       showConfirmButton: false,
//       timer: 1000
//     });

//     addToCartAction(product); 
//   };

//   const decreaseQuantity = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   const increaseQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   if (!product) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-4xl font-bold">Product Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//     <Head>
//     <title>{product.name} | Your Store</title>
//     <meta
//       name="description"
//       content={`Buy ${product.name} now for only $${product.price}. Perfect for any occasion.`}
//     />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   </Head>

//     <div className="max-w-7xl mx-auto px-4 py-10 mb-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md object-cover"
//             />
//           )}
//         </div>
//         <div>
//           <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
//           <div className="flex items-center mt-4 mb-4">
//               <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
//               <span className="text-gray-500">({product.category} Reviews)</span>
//             </div>
//           <div className="flex items-center mt-4">
//             <p className="text-2xl font-bold text-gray-700">${product.price}</p>
//             {product.discountPercent && (
//               <span className="ml-4 text-gray-500 line-through">${product.discountPercent}</span>
//             )}
//           </div>
//           <p className="text-lg text-gray-600 mt-4">{product.description}</p>

//           {/* Color Selection */}
//           <div className="mb-6 mt-4">
//             <h3 className="font-semibold mb-2">Select Color</h3>
//             <div className="flex space-x-2 flex-wrap">
//               {product.colors?.map((color) => (
//                 <div
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-8 h-8 rounded-full border-2 transition ${
//                     selectedColor === color ? "border-black" : "border-gray-300"
//                   } cursor-pointer`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Choose Size</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes?.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg transition ${
//                     selectedSize === size ? "border-black text-black" : "border-gray-300 text-gray-500"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selection */}
//           <div className="flex items-center mb-6">
//             <button
//               onClick={decreaseQuantity}
//               className="px-4 py-2 border rounded-l-full bg-black text-white hover:bg-gray-800"
//             >
//               -
//             </button>
//             <span className="px-4 py-2 border-t border-b">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="px-4 py-2 border rounded-r-full bg-black text-white hover:bg-gray-800"
//             >
//               +
//             </button>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={(e) => handleAddToCart(e, product)}
//             className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             aria-label="Add to Cart"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



"use client";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { addToCart as addToCartAction } from "../../action/action"; // Renaming to avoid conflict
import Swal from 'sweetalert2';
import Head from "next/head";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0]{
      _id,
      name,
      slug,
      description,
      price,
      discountPrice,
      reviewsCount,
      image,
      colors,
      sizes,
      quantity,
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Unwrap the params Promise
      const { slug } = resolvedParams;

      if (slug) {
        async function fetchProduct() {
          try {
            const fetchedProduct = await getProduct(slug);
            setProduct(fetchedProduct);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        }
        fetchProduct();
      }
    };
    fetchParams();
  }, [params]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    if (!selectedColor || !selectedSize) {
      Swal.fire({
        position: 'top-start',
        icon: 'warning',
        title: 'Please select color and size before adding to the cart.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000
    });

    addToCartAction(product); // Call the external action handler
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
    <Head>
    <title>{product.name} | Your Store</title>
    <meta
      name="description"
      content={`Buy ${product.name} now for only $${product.price}. Perfect for any occasion.`}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>

    <div className="max-w-7xl mx-auto px-4 py-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
          <div className="flex items-center mt-4 mb-4">
              <span className="text-yellow-400 font-bold mr-2">4.5/5</span>
              <span className="text-gray-500">({product.category} Reviews)</span>
            </div>
          <div className="flex items-center mt-4">
            <p className="text-2xl font-bold text-gray-700">${product.price}</p>
            {product.discountPercent && (
              <span className="ml-4 text-gray-500 line-through">${product.discountPercent}</span>
            )}
          </div>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6 mt-4">
            <h3 className="font-semibold mb-2">Select Color</h3>
            <div className="flex space-x-2 flex-wrap">
              {product.colors?.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  } cursor-pointer`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    selectedSize === size ? "border-black text-black" : "border-gray-300 text-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
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

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            aria-label="Add to Cart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
