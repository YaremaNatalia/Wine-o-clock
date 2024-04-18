import { FC, useEffect, useState } from 'react';
import { BtnClickEvent, ICountry, IPromData, IWine } from '@/types/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QueryKeys, operations } from '@/tanStackQuery';

import Loader from '@/components/Loader';
import WineList from '@/components/WineList';
import Container from '@/components/Container';
import WineTimeHero from '@/components/WineTimeHero';
import WineTimeDescription from '@/components/WineTimeDescription';
import PageNavigation from '@/components/PageNavigation';
import WineTimer from '@/components/WineTimer';
import Button from '@/components/Button';
import { ButtonDesign, theme } from '@/constants';
import NotFoundPage from '@/pages/NotFoundPage';
import { WineTimeStyled } from './WineTime.styled';
import ComingSoon from '@/icons/coming-soon.svg?react';

const WineTime: FC = () => {
  const [page, setPage] = useState(1);
  const [promWines, setPromWines] = useState<IWine[]>([]);
  const [promCountries, setPromCountries] = useState<ICountry[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const perPage = window.innerWidth >= theme.breakpoints.tablet ? 8 : 6;

  const { data, isLoading, isError, refetch } = useQuery<IPromData>({
    queryFn: () => operations.getPromotion(page, perPage),
    queryKey: [QueryKeys.promotion, page],
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!isError && data) {
      const { dataDTO, producedCountryList } = data;
      setPromWines((prevWines) => [...prevWines, ...data.dataDTO.data]);
      setPromCountries(producedCountryList);
      if (dataDTO.totalPages !== undefined) {
        setTotalPages(dataDTO.totalPages);
      }
    }
  }, [isError, data]);

  useEffect(() => {
    const currentTime = new Date();
    const remainingMilliseconds = 3600000 - (currentTime.getTime() % 3600000);
    const intervalId = setTimeout(() => {
      setPage(1);
      setPromWines([]);
      refetch();
      const nextHourIntervalId = setInterval(() => {
        setPage(1);
        setPromWines([]);
        refetch();
      }, 3600000);

      return () => {
        if (nextHourIntervalId) {
          clearInterval(nextHourIntervalId);
        }
      };
    }, remainingMilliseconds);

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [refetch, setPage]);

  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }

  const handleShowMore = async (e: BtnClickEvent) => {
    setPage((prevPage) => prevPage + 1);
    e.currentTarget.blur();
  };

  return (
    <WineTimeStyled>
      <WineTimeHero />
      <PageNavigation firstPageTitle='Main page' secondPageTitle='Wine time' />
      <WineTimeDescription />
      <WineTimer wines={promWines} countries={promCountries} />
      <Container>
        {promWines.length > 0 ? (
          <WineList wines={promWines} />
        ) : (
          <ComingSoon title='Coming soon' />
        )}

        {!isLoading && page < totalPages && (
          <Button
            title={isLoading ? 'Loading more...' : 'Show more'}
            buttonDesign={ButtonDesign.burgundy}
            onClick={handleShowMore}
            disabled={isLoading}
          />
        )}
      </Container>
    </WineTimeStyled>
  );
};

export default WineTime;
