import { FC, useEffect, useState } from 'react';
import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import MainWineListSection from '@/components/MainWineListSection';
import ModalWin from '@/components/ModalWin';
import MainAgeModal from '@/components/MainAgeModal';
import { IAllWinesData } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

import Loader from '@/components/Loader';

import { QueryKeys, operations } from '@/tanStackQuery';
import NotFoundPage from '@/pages/NotFoundPage';

const Main: FC = () => {
  const [ageModalIsOpen, setAgeModalIsOpen] = useState(false);

  const { data, isLoading, isError } = useQuery<IAllWinesData>({
    queryFn: () => operations.getAllWines(),
    queryKey: [QueryKeys.wines],
  });

  useEffect(() => {
    let timer = null;
    timer = setTimeout(() => {
      setAgeModalIsOpen(true);
    }, 1000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const handleCloseAgeModal = () => {
    setAgeModalIsOpen(false);
  };

  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }

  const wineData = data?.data;
  const sales = wineData?.filter((wine) => wine.isSale);
  const newWines = wineData?.filter((wine) => wine.isNewCollection);
  const bestsellers = wineData
    ?.filter((wine) => wine.isBestSeller)
    .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

  return (
    <>
      <MainHero />
      {newWines && newWines.length > 0 && (
        <MainWineListSection wines={newWines} sectionTitle='New collection' />
      )}
      <MainWineTime />
      {bestsellers && bestsellers.length > 0 && (
        <MainWineListSection wines={bestsellers} sectionTitle='Bestsellers' />
      )}
      <MainQualities />

      {sales && sales.length > 0 && (
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

export default Main;
