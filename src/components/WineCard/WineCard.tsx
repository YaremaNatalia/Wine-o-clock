import { FC } from 'react';
import { IProps } from './WineCard.types';
import { IoMdHeartEmpty } from 'react-icons/io';
import { WineCardStyled, WineDetailsLink } from './WineCard.styled';
import IconButton from '@/components/IconButton';
import { AriaLabels, ButtonTypes } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import { BtnClickEvent } from '@/types/types';
import { useLocation } from 'react-router-dom';

const WineCard: FC<IProps> = ({ wine }) => {
  const location = useLocation();
  const {
    _id,
    title,
    country,
    price,
    imageUrl,
    adminDiscountPercentage,
    isNewCollection,
  } = wine;

  const handleClick = (e: BtnClickEvent) => {
    console.log('click');
    e.currentTarget.blur();
  };

  return (
    <WineDetailsLink state={{ from: location }} to={`/store/${_id}`}>
      <WineCardStyled>
        <div className='imgWrapper'>
          <img className='wineImg' src={imageUrl} alt='Wine image' />
          <div className='iconsWrapper'>
            <div className='labelWrapper'>
              {isNewCollection && <p className='wineNewLabel'>New</p>}
              {adminDiscountPercentage > 0 && (
                <p className='wineDiscountLabel'>-{adminDiscountPercentage}%</p>
              )}
            </div>
            <IoMdHeartEmpty />
          </div>
        </div>
        <div className='wineCardInfo'>
          <p className='wineName'>{title}</p>
          <p className='wineCountry'>{country}</p>
          <div className='priceWrapper'>
            <p className='winePrice'>{price} ₴</p>
            <IconButton
              btnSize={40}
              ariaLabel={AriaLabels.basket}
              type={ButtonTypes.button}
              onClick={handleClick}
            >
              <BasketPlus />
            </IconButton>
          </div>
        </div>
      </WineCardStyled>
    </WineDetailsLink>
  );
};

export default WineCard;
