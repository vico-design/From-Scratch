import React from "react";
import "./styles.css";

interface IPagi {
  totalResults: number;
  totalPages: number;
  actualPage: number;
  changePage: (action: any) => void;
}

const Pagination = ({
  totalResults,
  totalPages,
  actualPage,
  changePage,
}: IPagi) => {
  return (
    <div className="pagination-container">
      <button
        disabled={actualPage === 1}
        className="prev-button"
        onClick={() => changePage("previous")}>
        Previous
      </button>
      {actualPage > 1 && (
        <button className="one-less-page">{actualPage - 1}</button>
      )}
      <button className="current-page">{actualPage}</button>
      {totalPages - actualPage > 0 && (
        <button className="one-more-page">{actualPage + 1}</button>
      )}
      {totalPages - actualPage - 1 > 0 && <p className="rest-pages">...</p>}
      {totalPages - actualPage - 1 > 0 && (
        <p className="rest-pages">{totalPages - actualPage - 1}</p>
      )}
      <button
        className="next-button"
        disabled={totalPages - actualPage === 0}
        onClick={() => changePage("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
