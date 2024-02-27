import { IPagination } from '@/types/types';
import { useState } from 'react';

const usePagination = <T,>(
  totalItems: T[],
  itemsPerPage: number
): IPagination<T> => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(totalItems.length / itemsPerPage);

  const toNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const toPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    currentItems,
    totalPages,
    toNextPage,
    toPrevPage,
  };
};

export default usePagination;
