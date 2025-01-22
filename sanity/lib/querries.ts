import { groq } from "next-sanity";

export const allproducts = groq`[*_type == 'product']`;
export const fourpro = groq`[*_type == 'product'][0..3]`;



// import { groq } from 'next-sanity';
// import { sanityClient } from '../../sanity/lib/client'; // Adjust this path to your sanity client

// export const getProducts = async () => {
//   const query = groq`
//     *[_type == 'product'] {
//       _id,
//       name,
//       price,
//       description,
//       image {
//         asset -> {
//           url
//         }
//       },
//       category,
//       discountPercent,
//       new,
//       colors,
//       sizes
//     }
//   `;
  
//   const products = await sanityClient.fetch(query);
//   return products;
// };
