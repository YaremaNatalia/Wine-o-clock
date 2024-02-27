import { FC, useEffect, useState } from 'react';
import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import MainWineListSection from '@/components/MainWineListSection';
import ModalWin from '@/components/ModalWin';
import MainAgeModal from '@/components/MainAgeModal';
import { $instance } from '@/utils/backendURL';
import { IWine } from '@/types/types';


const MainPage: FC = () => {
  const [ageModalIsOpen, setAgeModalIsOpen] = useState(false);
  const [wineData, setWineData] = useState<IWine[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $instance.get('v1/craft_wines');
        setWineData(response.data);
      } catch (error) {
        console.error('Error fetching wine data:', error);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setAgeModalIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseAgeModal = () => {
    setAgeModalIsOpen(false);
  };

  const sales = wineData.filter((wine) => wine.isSale);
  const newWines = wineData.filter((wine) => wine.isNewCollection);

  // const bestsellers = wineData
  //   .filter((wine) => wine.bottlesSoldCounter > 0)
  //   .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

  const bestsellers = wineData.filter((wine) => wine.isBestSeller);

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
