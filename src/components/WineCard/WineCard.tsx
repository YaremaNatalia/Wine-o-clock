import { FC } from 'react';
import { IProps } from './WineCard.types';
import { IoMdHeartEmpty } from 'react-icons/io';
import { WineCardStyled } from './WineCard.styled';

const WineCard: FC<IProps> = ({ wine }) => {
  const {
    wineName,
    country,
    price,
    imageUrl,
    adminDiscountPercentage,
    isNewCollection,
  } = wine;

  const discount = (adminDiscountPercentage / 100) * price;

  return (
    <WineCardStyled>
      <div className='imgWrapper'>
        <img className='WineImg' src={imageUrl} alt='Wine image' />
        {isNewCollection && <p className='wineNewLabel'>New</p>}
        <p className='wineDiscountLabel'>-{discount}%</p>
        <IoMdHeartEmpty />
      </div>
      <div className='wineCardInfo'>
        <p className='wineName'>Name: {wineName}</p>
        <p className='wineCountry'>Country: {country.name}</p>
        <p className='winePrice'>Price: {price}</p>
      </div>
    </WineCardStyled>
  );
};

export default WineCard;
