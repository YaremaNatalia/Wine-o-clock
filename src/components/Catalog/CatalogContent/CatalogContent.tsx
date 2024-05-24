import Button from '@/components/Button';
import WineList from '@/components/WineList';
import { ButtonDesign } from '@/constants';
import { operations } from '@/tanStackQuery';
import { BtnClickEvent, IWine } from '@/types/types';
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
import NotFoundPage from '@/pages/NotFoundPage';
import Filter from '../Filter';
import { usePagination } from '@/utils';

const CatalogContent: FC = () => {
  const [page, setPage] = useState(1);
  const [wines, setWines] = useState<IWine[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(4);

  // const { data, isError, isLoading } = useQuery<IAllWinesData>({
  //   queryFn: () => operations.getAllWines(page, limit),
  //   queryKey: [QueryKeys.wines, page, limit],
  //   refetchOnMount: true,
  // });

  const data = operations.allWines();
  const { currentPage, currentItems, toNextPage } = usePagination(
    data?.products ?? [],
    limit
  );

  // useEffect(() => {
  //   const data = operations.allWines();
  //   const { products, count } = data;
  //   if (data) {
  //     setWines((prevWines) => {
  //       if (Array.isArray(prevWines)) {
  //         return [...prevWines, ...currentItems];
  //       } else {
  //         return [...products];
  //       }
  //     });
  //     const allPages = Math.ceil(count / limit);
  //     if (allPages !== undefined) {
  //       setTotalPages(allPages);
  //     }
  //   }
  // }, [data, limit]);

  useEffect(() => {
    if (data) {
      const { count } = data;
      if (wines.length === 0) {
        setWines(currentItems);
      } else if (page !== currentPage) {
        setWines((prevWines) => [...prevWines, ...currentItems]);
        setPage(currentPage);
      }
      setTotalPages(Math.ceil(count / limit));
    }
  }, [wines, page, data, currentItems, currentPage, limit]);

  // if (!data) return <Loader />;
  if (!data) {
    return <NotFoundPage />;
  }

  const handleShowMore = async (e: BtnClickEvent) => {
    toNextPage();
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
        <Filter />
        {wines.length > 0 && <WineList wines={wines} />}
      </ContentWrapper>
      {data && page < totalPages && (
        <Button
          title={'Show more'}
          buttonDesign={ButtonDesign.burgundy}
          onClick={handleShowMore}
          // disabled={isLoading}
        />
      )}
    </ContentStyled>
  );
};

export default CatalogContent;
