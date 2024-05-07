import { FC } from 'react';

import WineCard from '@/components/WineCard';
import Section from '@/components/Section';
import { IProps } from './WineList.types';
import { WineListStyled } from './WineList.styled';

const WineList: FC<IProps> = ({ wines }) => {
  return (
    <Section>
      <WineListStyled>
        {wines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </WineListStyled>
    </Section>
  );
};

export default WineList;
