import { FC, useEffect, useState } from 'react';
import { BtnClickEvent, IWine } from '@/types/types';
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
  // const [displayedWines, setDisplayedWines] = useState(6);

  const [page, setPage] = useState(1);
  const [wines, setWines] = useState<IWine[]>([]);

  const perPage = window.innerWidth >= theme.breakpoints.tablet ? 8 : 6;

  // useEffect(() => {
  //   const initialWinesPerPage =
  //     window.innerWidth >= theme.breakpoints.tablet ? 8 : 6;
  //   setDisplayedWines(initialWinesPerPage);
  // }, []);

  // const {
  //   data: wineData,
  //   isLoading,
  //   isSuccess,
  // } = useQuery<IWine[]>({
  //   queryFn: () => operations.getAllWines(),
  //   queryKey: [QueryKeys.wines],
  // });

  const { data, isLoading, isSuccess, refetch } = useQuery<IWine[]>({
    queryFn: () => operations.getAllWines(page, perPage),
    queryKey: [QueryKeys.wines],
  });

  useEffect(() => {
    if (isSuccess && data) {
      setWines((prevWines) => [...prevWines, ...data]);
    }
  }, [isSuccess, data]);

  if (isLoading) return <Loader />;
  if (!isSuccess) {
    return <NotFoundPage />;
  }

  // const wineTimeWines = wineData.filter((wine) => wine.isWineTimePromotion);

  const wineTimeWines = wines.filter((wine) => wine.isWineTimePromotion);

  // const handleShowMore = (e: BtnClickEvent) => {
  //   const winesPerPage = window.innerWidth >= theme.breakpoints.tablet ? 8 : 6;
  //   setDisplayedWines((prevDisplayed) => prevDisplayed + winesPerPage);
  //   e.currentTarget.blur();
  // };

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
      {wineTimeWines.length > 0 && <WineTimer />}
      <Container>
        {wineTimeWines.length > 0 && (
          /* <WineList wines={wineTimeWines.slice(0, displayedWines)} />*/
          <WineList wines={wineTimeWines} />
        )}
        {/* {wineTimeWines.length > displayedWines && ( */}
        {!isLoading && wineTimeWines.length > perPage && (
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
