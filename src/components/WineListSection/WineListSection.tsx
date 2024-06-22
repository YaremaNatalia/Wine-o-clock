import { FC} from 'react';
import { WineListSectionStyled } from './WineListSection.styled';
import { IProps } from './WineListSection.types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import WineList from '@/components/WineList';
import { setPagination, setWindowResize } from '@/utils';


const WineListSection: FC<IProps> = ({
  wines,
  sectionTitle,
  componentTitle,
}) => {

  const screenSize = setWindowResize();

  let wineCardsPerPage: number;
  if (componentTitle === 'MainPage') {
    wineCardsPerPage = screenSize.isMobileScreen ? 2 : 4;
  } else {
    wineCardsPerPage = screenSize.isMobileScreen ? 6 : 4;
  }

  const { currentPage, currentItems, totalPages, toNextPage, toPrevPage } =
    setPagination(wines, wineCardsPerPage);

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
