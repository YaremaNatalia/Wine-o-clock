import { FC, useEffect, useState } from 'react';

import { MainWineListSectionStyled } from './MainWineListSection.styled';
import { IProps } from './WineList.types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IWine } from '@/types/types';
import WineList from '@/components/WineList';
import { usePagination, useWindowResize } from '@/utils';

const MainWineListSection: FC<IProps> = ({ wines, sectionTitle }) => {
  const [wineCards, setWineCards] = useState<IWine[]>([]);

  const screenSize = useWindowResize();

  useEffect(() => {
    const fetchWines = async () => {
      const data = wines;

      setWineCards(data);
    };
    fetchWines();
  }, [wines]);

  const wineCardsPerPage = screenSize.isMobileScreen ? 2 : 4;
  const { currentPage, currentItems, totalPages, toNextPage, toPrevPage } =
    usePagination(wineCards, wineCardsPerPage);

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
                disabled={currentPage === totalPages}
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
          <WineList wines={currentItems} />
        </MainWineListSectionStyled>
      </Container>
    </Section>
  );
};

export default MainWineListSection;
