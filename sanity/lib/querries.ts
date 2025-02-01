import { groq } from "next-sanity";

export const allProducts = groq`*[_type == 'product']`;
export const fourpro = groq`*[_type == 'product'][13..16]`;
export const fouritem = groq`*[_type == 'product'][4..7]`;
export const eightitem = groq`*[_type == 'product'][0..7]`;



