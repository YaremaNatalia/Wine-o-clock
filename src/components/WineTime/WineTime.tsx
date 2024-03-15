import { FC } from 'react';
import { IWine } from '@/types/types';
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
import { ButtonDesign } from '@/constants';
import NotFoundPage from '@/pages/NotFoundPage';
import { WineTimeStyled } from './WineTime.styled';

const WineTime: FC = () => {
  const {
    data: wineData,
    isLoading,
    isSuccess,
  } = useQuery<IWine[]>({
    queryFn: () => operations.getAllWines(),
    queryKey: [QueryKeys.wines],
  });

  if (isLoading) return <Loader />;
  if (!isSuccess) {
    return <NotFoundPage />;
  }

  const wineTimeWines = wineData.filter((wine) => wine.isWineTimePromotion);

  return (
    <WineTimeStyled>
      <WineTimeHero />
      <PageNavigation firstPageTitle='Main page' secondPageTitle='Wine time' />
      <WineTimeDescription />
      <WineTimer />
      <Container>
        {wineTimeWines.length > 0 && <WineList wines={wineTimeWines} />}
        <Button
          title='Show more'
          buttonDesign={ButtonDesign.burgundy}
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Container>
    </WineTimeStyled>
  );
};

export default WineTime;
