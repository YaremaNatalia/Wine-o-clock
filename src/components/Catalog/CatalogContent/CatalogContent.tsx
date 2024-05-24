import Button from '@/components/Button';
import WineList from '@/components/WineList';
import { ButtonDesign } from '@/constants';
import { QueryKeys, operations } from '@/tanStackQuery';
import { BtnClickEvent, IAllWinesData, IWine } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { PiSliders } from 'react-icons/pi';
import {
  ContentStyled,
  ContentWrapper,
  FilterWrapper,
  NavigationWrapper,
  SelectPerPageWrapper,
  ToShameWrapper,
} from './CatalogContent.styled';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';
import NotFoundPage from '@/pages/NotFoundPage';
import Filter from '../Filter';

const CatalogContent: FC = () => {
  const [page, setPage] = useState(1);
  const [wines, setWines] = useState<IWine[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(4);

  const { data, isError, isLoading } = useQuery<IAllWinesData>({
    queryFn: () => operations.getAllWines(page, limit),
    queryKey: [QueryKeys.wines, page, limit],
    refetchOnMount: true,
  });

  useEffect(() => {
    if (!isError && data) {
      const { products, count } = data;
      setWines((prevWines) => [...prevWines, ...products]);
      const allPages = Math.ceil(count / limit);
      if (allPages !== undefined) {
        setTotalPages(allPages);
      }
    }
  }, [isError, data, limit]);

  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }

  const handleShowMore = async (e: BtnClickEvent) => {
    setPage((prevPage) => prevPage + 1);
    e.currentTarget.blur();
  };

  return (
    <ContentStyled>
      <NavigationWrapper>
        <p className='filterProducts'>Filter products</p>
        <ToShameWrapper>
          <p>To shame</p>
          <IoIosArrowDown size={18} />
        </ToShameWrapper>
        <FilterWrapper>
          <PiSliders size={24} />
          <p>Filters</p>
        </FilterWrapper>
        <SelectPerPageWrapper>
          <p>Number of products on the page</p>
          <IoIosArrowDown size={18} />
        </SelectPerPageWrapper>
      </NavigationWrapper>
      <ContentWrapper>
        <Filter/>
        {wines.length > 0 && <WineList wines={wines} />}
        </ContentWrapper>
        {!isLoading && page < totalPages && (
          <Button
            title={'Show more'}
            buttonDesign={ButtonDesign.burgundy}
            onClick={handleShowMore}
            disabled={isLoading}
          />
        )}
    </ContentStyled>
  );
};

export default CatalogContent;
