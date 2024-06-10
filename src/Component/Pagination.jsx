/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumber = [];

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div>
      <ul className="flex gap-2">
        {currentPage > 1 && (
          <li
            className="bg-gray-400 text-white w-[40px] p-2 pl-2 rounded-full cursor-pointer"
            onClick={handlePrevious}
          >
            {" "}
            {"<<"}
          </li>
        )}

        {pageNumber.map((number) => (
          <li
            style={{
              backgroundColor: currentPage === number ? "white" : "",
              color: currentPage === number ? "black" : ""
            }}
            key={number}
            className="bg-gray-400 text-white w-[40px] p-2 pl-4 rounded-full cursor-pointer"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        {
            currentPage < totalPages &&
          <li
            className="bg-gray-400 text-white w-[40px] p-2 pl-2 rounded-full cursor-pointer"
            onClick={handleNext}
          >
            {" "}
            {">>"}
          </li>
        }
      </ul>
    </div>
  );
}

export default Pagination;
