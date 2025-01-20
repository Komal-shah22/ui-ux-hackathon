import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == 'product']{
      name,
      price,
      description,
      image,
      category,
      discountPercent,
      new,
      colors,
      sizes,
      'imageurl': image.asset->url
    }`);

    export const fourpro = defineQuery(`
    *[_type == 'product'][0..3]{
      name,
      price,
      description,
      image,
      category,
      discountPercent,
      new,
      colors,
      sizes,
      'imageurl': image.asset->url
        }`);
      

  