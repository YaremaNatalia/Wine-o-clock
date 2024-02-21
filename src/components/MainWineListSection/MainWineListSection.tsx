import { FC, useEffect, useState } from 'react';

import { MainWineListSectionStyled } from './MainWineListSection.styled';
import { IProps } from './WineList.types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IWine } from '@/types/types';
import { theme } from '@/constants';
import WineList from '@/components/WineList';

const MainWineListSection: FC<IProps> = ({ wines, sectionTitle }) => {
  const [wineCards, setWineCards] = useState<IWine[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wineCardsPerPage, setWineCardsPerPage] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isDesktopScreen:
      typeof window !== 'undefined' &&
      window.innerWidth >= theme.breakpoints.desktop,
    isTabletScreen:
      window.innerWidth >= theme.breakpoints.tablet &&
      window.innerWidth < theme.breakpoints.desktop,
    isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesktopScreen: window.innerWidth >= theme.breakpoints.desktop,
        isTabletScreen:
          window.innerWidth >= theme.breakpoints.tablet &&
          window.innerWidth < theme.breakpoints.desktop,
        isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [screenSize]);

  useEffect(() => {
    const fetchWines = async () => {
      const data = wines;

      setWineCards(data);
    };
    fetchWines();
  }, [wines]);

  useEffect(() => {
    if (screenSize.isMobileScreen) {
      setWineCardsPerPage(2);
    } else {
      setWineCardsPerPage(4);
    }
  }, [screenSize]);

  const indexOfLastWineCard = currentPage * wineCardsPerPage;
  const indexOfFirstWineCard = indexOfLastWineCard - wineCardsPerPage;
  const currentWineCards = wineCards.slice(
    indexOfFirstWineCard,
    indexOfLastWineCard
  );
  const totalWineCards = wineCards.length;

  const toNextPage = () => {
    if (currentPage < Math.ceil(totalWineCards / wineCardsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const toPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Section>
      <Container>
        <MainWineListSectionStyled>
          <div className='listNavWrapper'>
            <p className='sectionTitle'>{sectionTitle}</p>
            <div className='arrowWrapper'>
              <button
                type='button'
                onClick={toPrevPage}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack size={20} />
              </button>
              <button
                type='button'
                onClick={toNextPage}
                disabled={
                  currentPage === Math.ceil(totalWineCards / wineCardsPerPage)
                }
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
          <WineList wines={currentWineCards} />
        </MainWineListSectionStyled>
      </Container>
    </Section>
  );
};

export default MainWineListSection;
