import { groq } from "next-sanity";

export const allproducts = groq`[*_type == 'product']`;
export const fourpro = groq`[*_type == 'product'][0..3]`;

