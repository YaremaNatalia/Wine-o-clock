import { IPagination } from '@/types/types';
import { useEffect, useState } from 'react';

const usePagination = <T,>(
  totalItems: T[] | undefined,
  itemsPerPage: number,
): IPagination<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (totalItems) {
      setTotalPages(Math.ceil(totalItems.length / itemsPerPage));
    }
  }, [totalItems, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    totalItems?.slice(indexOfFirstItem, indexOfLastItem) ?? [];

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
