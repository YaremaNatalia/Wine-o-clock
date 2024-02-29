import { FC, useEffect, useState } from 'react';
import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import MainWineListSection from '@/components/MainWineListSection';
import ModalWin from '@/components/ModalWin';
import MainAgeModal from '@/components/MainAgeModal';
import { IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { fetchAllWines } from '@/query/wines/operations';
import Loader from '@/components/Loader';

const MainPage: FC = () => {
  const [ageModalIsOpen, setAgeModalIsOpen] = useState(false);

  const {
    data: wineData,
    isLoading,
    isSuccess,
  } = useQuery<IWine[]>({
    queryFn: () => fetchAllWines(),
    queryKey: ['wines'],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAgeModalIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseAgeModal = () => {
    setAgeModalIsOpen(false);
  };

  if (isLoading) return <Loader />;
  if (!isSuccess) return <div>page 404</div>;

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
