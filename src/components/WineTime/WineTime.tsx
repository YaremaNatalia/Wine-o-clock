import { FC, useEffect, useState } from 'react';
import { BtnClickEvent, ICountry, IPromData, IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
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

const WineTime: FC = () => {
  const [page, setPage] = useState(0);
  const [promWines, setPromWines] = useState<IWine[]>([]);
  const [promCountry, setPromCountry] = useState<ICountry[]>([]);

  const perPage = window.innerWidth >= theme.breakpoints.tablet ? 8 : 6;

  const { data, isLoading, isSuccess, refetch } = useQuery<IPromData>({
    queryFn: () => operations.getPromotion(page, perPage),
    queryKey: [QueryKeys.promotion],
  });

  useEffect(() => {
    if (isSuccess && data) {
      const { dataDTO, producedCountryList } = data;
      setPromWines((prevWines) => [...prevWines, ...dataDTO.data]);
      setPromCountry(producedCountryList);
    }
  }, [isSuccess, data]);

  if (isLoading) return <Loader />;
  if (!isSuccess) {
    return <NotFoundPage />;
  }

  const handleShowMore = async (e: BtnClickEvent) => {
    await refetch();
    setPage((prevPage) => prevPage + 1);
    e.currentTarget.blur();
  };

  return (
    <WineTimeStyled>
      <WineTimeHero />
      <PageNavigation firstPageTitle='Main page' secondPageTitle='Wine time' />
      <WineTimeDescription />
      {promWines.length > 0 && <WineTimer country={promCountry[0]} />}
      <Container>
        {promWines.length > 0 && <WineList wines={promWines} />}

        {!isLoading && promWines.length > perPage && (
          <Button
            title='Show more'
            buttonDesign={ButtonDesign.burgundy}
            onClick={handleShowMore}
          />
        )}
      </Container>
    </WineTimeStyled>
  );
};

export default WineTime;
