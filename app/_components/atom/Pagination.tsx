"use client";
import React, { useState } from "react";

interface Props {
  total: number;
  count: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({
  total,
  count,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(total / count);
  const [pageChunk, setPageChunk] = useState(0);
  const pagesPerChunk = 10;
  const startPage = 1 + pageChunk * pagesPerChunk;
  const endPage = Math.min(totalPages, (pageChunk + 1) * pagesPerChunk);

  const changePageChunk = (newChunk: number) => {
    setPageChunk(newChunk);
    setCurrentPage(startPage + newChunk * pagesPerChunk);
  };

  const jumpToFirst = () => {
    setPageChunk(0);
    setCurrentPage(1);
  };

  const jumpToLast = () => {
    const lastChunk = Math.floor((totalPages - 1) / pagesPerChunk);
    setPageChunk(lastChunk);
    setCurrentPage(lastChunk * pagesPerChunk + 1);
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-1">
        {pageChunk > 0 && (
          <li className="px-1" onClick={jumpToFirst}>
            {"<<"}
          </li>
        )}

        {pageChunk > 0 && (
          <li className="px-1" onClick={() => changePageChunk(pageChunk - 1)}>
            {"<"}
          </li>
        )}

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <li
            key={page}
            className={`${
              page === currentPage
                ? "bg-gray-200"
                : "bg-white hover:bg-gray-200"
            } rounded-md px-3 py-1 cursor-pointer`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}

        {endPage < totalPages && (
          <li className="px-1" onClick={() => changePageChunk(pageChunk + 1)}>
            {" > "}
          </li>
        )}

        {endPage < totalPages && (
          <li className="px-1" onClick={jumpToLast}>
            {">>"}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
