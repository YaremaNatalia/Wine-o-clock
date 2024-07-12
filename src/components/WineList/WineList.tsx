import { FC } from 'react';

import WineCard from '@/components/WineCard';
import { IProps } from './WineList.types';
import { WineListStyled } from './WineList.styled';

const WineList: FC<IProps> = ({ wines }) => {

  return (
    <WineListStyled>
      {wines.map((wine) => (
        <WineCard
          key={wine._id}
          wine={wine}
 
        />
      ))}
    </WineListStyled>
  );
};

export default WineList;
