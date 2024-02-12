import { FC } from 'react';

import { WineListStyled } from './Wine.list.styled';
import { IProps } from './WineList.types';
import WineCard from '@/components/WineCard';

const WineList: FC<IProps> = ({ wines }) => {
  return (
    <WineListStyled>
      {wines.map((wine) => (
        <WineCard key={wine._id} wine={wine} />
      ))}
    </WineListStyled>
  );
};

export default WineList;
