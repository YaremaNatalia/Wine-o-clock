import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import { FC } from 'react';

import wineData from '../utils/data.json';
import MainWineListSection from '@/components/MainWineListSection';

const MainPage: FC = () => {
  const sales = wineData.filter((wine) => wine.isSale);
  const newWines = wineData.filter((wine) => wine.isNewCollection);

  const bestsellers = wineData
    .filter((wine) => wine.bottlesSoldCounter > 0)
    .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

  return (
    <>
      <MainHero />
      {newWines.length > 0 && (
        <MainWineListSection wines={newWines} sectionTitle='New collection' />
      )}
      <MainWineTime />
      {bestsellers.length > 0 && (
        <MainWineListSection wines={bestsellers} sectionTitle='Bestsellers' />
      )}
      <MainQualities />

      {sales.length > 0 && (
        <MainWineListSection wines={sales} sectionTitle='Sales' />
      )}
    </>
  );
};

export default MainPage;
