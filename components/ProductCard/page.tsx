import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  id:number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  return (
    <Link href={`/productDetail/${id}`}>

    <div className="flex flex-col items-center bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        className="h-48 w-full object-cover  mb-4"
        width={250} 
        height={220}
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="flex items-center space-x-1 text-yellow-500 mb-1">
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <span key={i}>★</span>
        ))}
        {rating % 1 !== 0 && <span>☆</span>}
        <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-black">${price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice}
          </span>
        )}
        {discount && (
          <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
            {discount}
          </span>
        )}
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;






// import React from "react";

// interface ProductCardProps {
//   images: string;
//   title: string;
//   price: number;
//   originalPrice?: number;
//   discount?: string;
//   rating: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   images,
//   title,
//   price,
//   originalPrice,
//   discount,
//   rating,
// }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-md bg-white">
//       <img
//         src={images}
//         alt={title}
//         className="w-full h-48 object-cover rounded-md mb-4"
//       />
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <div className="flex items-center justify-between mt-2">
//         <p className="text-xl font-bold text-gray-800">${price}</p>
//         {originalPrice && (
//           <p className="text-sm line-through text-gray-500">
//             ${originalPrice}
//           </p>
//         )}
//       </div>
//       {discount && <p className="text-green-500 text-sm">{discount}</p>}
//       <p className="text-yellow-500 mt-2">Rating: {rating} ⭐</p>
//     </div>
//   );
// };

// export default ProductCard;




