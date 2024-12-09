
'use client';

import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("/cartshirt.png");

  const images = [
    "/cartshirt.png", 
    "/cartshirt.png",
    "/cartshirt2.png",
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4">
      <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 mt-4 lg:mt-0 justify-center lg:justify-start">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={80} 
            height={80}
            className={`rounded-lg cursor-pointer border-2 ${
              selectedImage === image ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="flex-1 sm:w-auto  overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] mt-4 lg:mt-0">
        <Image
          src={selectedImage}
          alt="Selected Product"
          width={600} 
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;


