import { IPagination, IWine } from '@/types/types';
import { useState, useEffect } from 'react';
import filterWines from './filterWines';

const usePagination = (
  items: IWine[],
  itemsPerPage: number,
  toShameValue: string
): IPagination => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shamedWines, setShamedWines] = useState<IWine[]>([]);

  useEffect(() => {
    const sortedWines = filterWines.sortToShameWines(items, toShameValue);
    setShamedWines(sortedWines);
    setCurrentPage(1); 
  }, [items, toShameValue]);

    useEffect(() => {
      setCurrentPage(1); 
    }, [itemsPerPage]);

  const totalPages = Math.ceil(shamedWines.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shamedWines.slice(indexOfFirstItem, indexOfLastItem);

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
