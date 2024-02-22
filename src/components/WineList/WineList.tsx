import { FC } from 'react';

import WineCard from '@/components/WineCard';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { IProps } from './WineList.types';
import { WineListStyled } from './WineList.styled';

const WineList: FC<IProps> = ({ wines }) => {
  return (
    <Section>
      <Container>
        <WineListStyled>
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </WineListStyled>
      </Container>
    </Section>
  );
};

export default WineList;
