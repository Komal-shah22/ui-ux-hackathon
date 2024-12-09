import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Our Happy Customers
          </h2>
          <div className="flex gap-2">
            <span className="w-[30px] h-[30px] rounded-full bg-slate-100 text-center flex justify-center items-center cursor-pointer">
              <IoMdArrowRoundBack />
            </span>
            <span className="w-[30px] h-[30px] rounded-full bg-slate-100 text-center flex justify-center items-center cursor-pointer">
              <IoMdArrowRoundForward />
            </span>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default Testimonials;
