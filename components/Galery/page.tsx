'use client';

import Image from "next/image";
import React, { useState } from "react";

interface GalleryProps {
  images?: string[];
  defaultImage?: string;
}
const Gallery: React.FC<GalleryProps> = ({ images = [], defaultImage = "/default-image.png" }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || defaultImage);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsZoomed(false); 
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4">
      <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 mt-4 lg:mt-0 justify-center lg:justify-start">
        {images.length > 0 ? (
          images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className={`rounded-lg cursor-pointer border-2 ${
                selectedImage === image ? "border-black" : "border-gray-300"
              }`}
              onClick={() => handleImageClick(image)}
            />
          ))
        ) : (
          <div className="text-gray-500 text-center">No Images Available</div>
        )}
      </div>
      <div className="flex-1 sm:w-auto overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] mt-4 lg:mt-0">
        {selectedImage ? (
          <div
            className={`relative w-full h-full ${isZoomed ? "scale-150" : ""} transition-transform duration-300`}
            onClick={toggleZoom}
          >
            <Image
              src={selectedImage}
              alt="Selected Product"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-500">No Image Selected</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;


