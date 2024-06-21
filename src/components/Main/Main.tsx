import { FC, useEffect, useState } from 'react';
import MainHero from '@/components/Main/MainHero';
import MainQualities from '@/components/Main/MainQualities';
import MainWineTime from '@/components/Main/MainWineTime';
import MainAgeModal from '@/components/Main/MainAgeModal';
import { operations } from '@/tanStackQuery';
import WineListSection from '@/components/WineListSection';
import { setFilterWines } from '@/utils';


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

  const data = operations.allWines();

  const sales = setFilterWines.filterMainWines(data?.products ?? [], 'sales');
  const newWines = setFilterWines.filterMainWines(
    data?.products ?? [],
    'newCollection'
  );
  const bestsellers = setFilterWines.filterMainWines(
    data?.products ?? [],
    'bestsellers'
  );

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
      {ageModalIsOpen && <MainAgeModal onModalClose={handleCloseAgeModal} />}
    </>
  );
};

export default Main;
