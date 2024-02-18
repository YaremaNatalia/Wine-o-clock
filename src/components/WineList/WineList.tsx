import { FC } from 'react';

import { WineListStyled } from './Wine.list.styled';
import { IProps } from './WineList.types';
import WineCard from '@/components/WineCard';
import Container from '../Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import Section from '../Section';

const WineList: FC<IProps> = ({ wines, filterName }) => {
  return (
   <Section>
      <Container>
        <WineListStyled>
         <div className='listNavWrapper'>
            <p className='filterName'>{filterName}</p>
            <div className='arrowWrapper'>
              <IoIosArrowBack size={32} />
              <IoIosArrowForward size={32} />
            </div>
         </div>
          <ul>
            {wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </ul>
        </WineListStyled>
      </Container>
   </Section>
  );
};

export default WineList;
