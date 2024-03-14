import { FC } from 'react';
import { IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

import Loader from '@/components/Loader';

import { QueryKeys, operations } from '@/tanStackQuery';
import NotFoundPage from './NotFoundPage';
import WineList from '@/components/WineList';
import Container from '@/components/Container';
import WineTimeHero from '@/components/WineTimeHero';
import WineTimeDescription from '@/components/WineTimeDescription';

const WineTimePage: FC = () => {
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
    <>
      <WineTimeHero />
      <WineTimeDescription />
      <Container>
        {wineTimeWines.length > 0 && <WineList wines={wineTimeWines} />}
      </Container>
    </>
  );
};

export default WineTimePage;
