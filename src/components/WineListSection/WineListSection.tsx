import { FC, useEffect, useState } from 'react';

import { WineListSectionStyled } from './WineListSection.styled';
import { IProps } from './WineListSection.types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IWine } from '@/types/types';
import WineList from '@/components/WineList';
import { usePagination, useWindowResize } from '@/utils';

const WineListSection: FC<IProps> = ({
  wines,
  sectionTitle,
  componentTitle,
}) => {
  const [wineCards, setWineCards] = useState<IWine[]>([]);

  const screenSize = useWindowResize();

  useEffect(() => {
    const fetchWines = async () => {
      const data = wines;

      setWineCards(data);
    };
    fetchWines();
  }, [wines]);

  let wineCardsPerPage: number;
  if (componentTitle === 'MainPage') {
    wineCardsPerPage = screenSize.isMobileScreen ? 2 : 4;
  } else {
    wineCardsPerPage = screenSize.isMobileScreen ? 6 : 4;
  }

  const { currentPage, currentItems, totalPages, toNextPage, toPrevPage } =
    usePagination(wineCards, wineCardsPerPage);

  return (
    <Section>
      <Container>
        <WineListSectionStyled>
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
        </WineListSectionStyled>
      </Container>
    </Section>
  );
};

export default WineListSection;
