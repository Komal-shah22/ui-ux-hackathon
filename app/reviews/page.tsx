'use client'
import React, { useState } from "react";

const initialTestimonials = [
  {
    name: "Samantha D.",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
  },
  {
    name: "Alex M.",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
   name: "Ava H.",
   review:"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
   rating: 4
  },
  {
    name: "Samantha D.",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 5,
  },
  {
    name: "Alex M.",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: "Olivia P.",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only exemplifies these principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
  {
    name: "Liam K.",
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the vibrant colors scream confidence. It's like wearing a piece of art. It has reignited my passion for both design and fashion.",
    rating: 5,
  },
  {
    name: "Ethan R.",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
  },
];

const moreTestimonials = [
  {
    name: "Ethan R.",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
  },
  {
    name: "Olivia P.",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only exemplifies these principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
  {
    name: "Liam K.",
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the vibrant colors scream confidence. It's like wearing a piece of art. It has reignited my passion for both design and fashion.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const loadMoreReviews = () => {
    setTestimonials((prev) => [...prev, ...moreTestimonials]);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="flex items-center text-yellow-400">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.588 4.91a1 1 0 00.95.69h5.197c.969 0 1.371 1.24.588 1.81l-4.2 3.055a1 1 0 00-.364 1.118l1.588 4.91c.3.921-.755 1.688-1.54 1.118l-4.2-3.055a1 1 0 00-1.176 0l-4.2 3.055c-.785.57-1.84-.197-1.54-1.118l1.588-4.91a1 1 0 00-.364-1.118L2.146 9.337c-.783-.57-.38-1.81.588-1.81h5.197a1 1 0 00.95-.69l1.588-4.91z" />
                      </svg>
                    ))}
                </span>
              </div>
              <p className="text-gray-800 font-bold italic">{testimonial.name}</p>
              <p className="mt-4 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center mb-10">
          <button
            className="px-6 py-3 bg-black text-white font-bold rounded-3xl border-2 shadow-md hover:bg-black hover:text-white transition-colors"
            onClick={loadMoreReviews}
          >
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



