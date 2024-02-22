import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import { FC, useEffect, useState } from 'react';

import wineData from '../utils/data.json';
import MainWineListSection from '@/components/MainWineListSection';
import ModalWin from '@/components/ModalWin';
import MainAgeModal from '@/components/MainAgeModal';

const MainPage: FC = () => {
  const [ageModalIsOpen, setAgeModalIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAgeModalIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseAgeModal = () => {
    setAgeModalIsOpen(false);
  };

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
      {ageModalIsOpen && (
        <ModalWin>
          <MainAgeModal onModalClose={handleCloseAgeModal} />
        </ModalWin>
      )}
    </>
  );
};

export default MainPage;
