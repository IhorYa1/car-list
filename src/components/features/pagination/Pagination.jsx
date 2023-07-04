import React from 'react';
import './pagination.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 10;
  const pages = [...Array(totalPages).keys()];

  // Вираховуємо діапазон сторінок, які будуть видимими
  const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 0);
  const endPage = Math.min(startPage + visiblePages, totalPages);

  // Створюємо масив видимих сторінок
  const visiblePageNumbers = pages.slice(startPage, endPage);

  return (
    <div className='pagination-wrapper'>
      <button className={currentPage > 0 ? '' : 'disable-prev'} onClick={() => onPageChange(currentPage - 1)}>Prev</button>

      <div>
        {startPage > 0 && <button onClick={() => onPageChange(0)}>1</button>}
        {startPage > 1 && <span>...</span>}
        {visiblePageNumbers.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
          >
            {page + 1}
          </button>
        ))}
        {endPage < totalPages - 1 && <span>...</span>}
        {endPage < totalPages && (
          <button onClick={() => onPageChange(totalPages - 1)}>{totalPages}</button>
        )}
      </div>

      <button className={currentPage < (totalPages - 1) ? '' : 'disable-next'} onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
