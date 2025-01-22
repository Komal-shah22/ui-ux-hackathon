'use client';
import React, { useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { RiArrowRightLine } from "react-icons/ri";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pagesToShow = 5;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  const renderPageNumbers = () => {
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const page = startPage + index;
      return (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            currentPage === page ? "bg-black text-white" : ""
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="mb-20 flex justify-between items-center mt-8 px-4 lg:px-0 flex-col lg:flex-row">
      <button
        className={`bg-gray-300 text-gray-700 py-2 px-4 flex items-center justify-center rounded mb-4 lg:mb-0 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <HiArrowSmLeft /> Previous
      </button>
      <div className="flex space-x-2 mb-4 lg:mb-0">
        {renderPageNumbers()}
      </div>
      <button
        className={`bg-gray-300 text-gray-700 py-2 px-4 flex justify-center items-center rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next <RiArrowRightLine />
      </button>
    </div>
  );
};

export default Pagination;

