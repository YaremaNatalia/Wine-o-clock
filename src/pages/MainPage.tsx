import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import WineList from '@/components/WineList';
import { FC } from 'react';

import wineData from '../utils/data.json';

const MainPage: FC = () => {
  const sales = wineData.filter((wine) => wine.isSale);
  const newWines = wineData.filter((wine) => wine.isNewCollection);

  // const bestsellers = wineData
  //   .filter((wine) => wine.bottlesSoldCounter > 0)
  //   .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

  return (
    <>
      <MainHero />
      {newWines.length > 0 && <WineList wines={newWines} filterName='New collection' />}
      <MainWineTime />
      <MainQualities />

      {sales.length > 0 && <WineList wines={sales} filterName='Sales' />}
    </>
  );
};

export default MainPage;
