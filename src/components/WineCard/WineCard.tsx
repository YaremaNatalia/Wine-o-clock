import { FC } from 'react';
import { IProps } from './WineCard.types';
import { WineCardStyled } from './WineCard.styled';

const WineCard: FC<IProps> = ({ wine }) => {
  const {
    // _id,
    photo,
    name,
    country,
    price,
  } = wine;
  return (
    <WineCardStyled>
      <img src={photo} alt='Wine photo' />
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Price: {price}</p>
    </WineCardStyled>
  );
};

export default WineCard;
