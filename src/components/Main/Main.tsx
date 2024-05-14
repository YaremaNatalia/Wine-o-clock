import { FC, useEffect, useState } from 'react';
import MainHero from '@/components/Main/MainHero';
import MainQualities from '@/components/Main/MainQualities';
import MainWineTime from '@/components/Main/MainWineTime';
import ModalWin from '@/components/ModalWin';
import MainAgeModal from '@/components/Main/MainAgeModal';
import Loader from '@/components/Loader';
import { QueryKeys, operations } from '@/tanStackQuery';
import NotFoundPage from '@/pages/NotFoundPage';
import WineListSection from '@/components/WineListSection';
import { useQuery } from '@tanstack/react-query';
import { IAllWinesData } from '@/types/types';

const Main: FC = () => {
  const { useSiteVisited } = operations;
  const [ageModalIsOpen, setAgeModalIsOpen] = useState(false);
  const { isVisited, setVisited } = useSiteVisited();

  useEffect(() => {
    if (!isVisited) {
      setTimeout(() => {
        setAgeModalIsOpen(true);
      }, 1000);
    }
  }, [isVisited]);

  const handleCloseAgeModal = () => {
    setAgeModalIsOpen(false);
    setVisited();
  };

  const { data, isError, isLoading } = useQuery<IAllWinesData>({
    queryFn: () => operations.getAllWines(),
    queryKey: [QueryKeys.wines],
    refetchOnMount: true,
  });

  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }

  const sales = data?.products.filter((wine) => wine.isSale);
  const newWines = data?.products.filter((wine) => wine.isNewCollection);
  const bestsellers = data?.products
    .filter((wine) => wine.isBestSeller)
    .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

  return (
    <>
      <MainHero />
      {newWines && newWines.length > 0 && (
        <WineListSection
          wines={newWines}
          sectionTitle='New collection'
          componentTitle='MainPage'
        />
      )}
      <MainWineTime />
      {bestsellers && bestsellers.length > 0 && (
        <WineListSection
          wines={bestsellers}
          sectionTitle='Bestsellers'
          componentTitle='MainPage'
        />
      )}
      <MainQualities />

      {sales && sales.length > 0 && (
        <WineListSection
          wines={sales}
          sectionTitle='Sales'
          componentTitle='MainPage'
        />
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
