import { FC } from 'react';
import { IProps } from './WineCard.types';
import { WineCardStyled } from './WineCard.styled';

const WineCard: FC<IProps> = ({ wine }) => {
  const {
    // _id,
    photo,
    name,
    sweetness,
    country,
    region,
    volume,
    price,
    description,
    number_in_stock,
    alcohol,
  } = wine;
  return (
    <WineCardStyled>
      <img src={photo} alt='Wine photo' />
      <p>Name: {name}</p>
      <p>Sweetness: {sweetness}</p>
      <p>Country: {country}</p>
      <p>Region: {region}</p>
      <p>Volume: {volume}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p> Number in stock: {number_in_stock}</p>
      <p>Alcohol: {alcohol}</p>
    </WineCardStyled>
  );
};

export default WineCard;
