import { FC, useEffect, useState } from 'react';
import { IProps } from './WineCard.types';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { WineCardStyled, WineDetailsLink } from './WineCard.styled';
import IconButton from '@/components/IconButton';
import { AriaLabels, ButtonTypes, PagePaths } from '@/constants';
import BasketPlus from '@/icons/basketPlus.svg?react';
import OutOfStock from '@/icons/out-of-stock.svg?react';
import { BtnClickEvent } from '@/types/types';
import Loader from '../Loader';
import useAddToBasket from '@/hooks/useAddToBasket';
import useFavoritesMutation from '@/hooks/useFavoritesMutation';
import { operations } from '@/tanStackQuery';

const WineCard: FC<IProps> = ({ wine }) => {
  const {
    _id,
    title,
    country,
    price,
    imageUrl,
    adminDiscountPercentage,
    isNewCollection,
    quantity,
    wineColor,
    sugarConsistency,
    bottleCapacity,
  } = wine;

  const { addToBasket, isPending } = useAddToBasket();
  const { toggleFavorite, isFavoritesPending } = useFavoritesMutation();
  const favorites = operations.getFavoritesCache();

  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const handleBasketClick = (e: BtnClickEvent) => {
    e.stopPropagation();
    addToBasket({ wine });
    e.currentTarget.blur();
  };

  const handleFavoriteClick = (e: BtnClickEvent) => {
    e.stopPropagation();
    toggleFavorite(wine);

    e.currentTarget.blur();
  };

  useEffect(() => {
    if (favorites) setIsInFavorites(favorites.some((id) => id === _id));
  }, [favorites, _id]);

  return (
    <WineCardStyled quantity={quantity}>
      <WineDetailsLink
        to={`${PagePaths.wineDetailsPath.replace(':wineId', _id)}`}
        className='detailsLink'
      >
        <div className='imgWrapper'>
          <img className='wineImg' src={imageUrl} alt='Wine image' />
          <div className='iconsWrapper'>
            <div className='labelWrapper'>
              {isNewCollection && <p className='wineNewLabel'>New</p>}
              {adminDiscountPercentage > 0 && (
                <p className='wineDiscountLabel'>-{adminDiscountPercentage}%</p>
              )}
            </div>
          </div>
        </div>
        <div className='wineCardInfo'>
          <p className='wineName'>
            {title} <br />
            {wineColor} {sugarConsistency} {bottleCapacity} L
          </p>
          <p className='wineCountry'>{country}</p>
          <p className='winePrice'>{price} ₴</p>
        </div>
      </WineDetailsLink>
      {quantity > 0 && (
        <div className='basketBtnWrapper'>
          <IconButton
            btnSize={40}
            ariaLabel={AriaLabels.basket}
            type={ButtonTypes.button}
            onClick={handleBasketClick}
            disabled={isPending}
          >
            {isPending ? <Loader basket={true} /> : <BasketPlus />}
          </IconButton>
        </div>
      )}
      {quantity === 0 && (
        <div className='outOfStockOverlay'>
          <OutOfStock title='Out of stock' />
        </div>
      )}
      <div className='favoritesBtnWrapper'>
        <IconButton
          btnSize={27}
          ariaLabel={AriaLabels.favorites}
          type={ButtonTypes.button}
          onClick={handleFavoriteClick}
          disabled={isFavoritesPending}
        >
          {isInFavorites ? (
            <IoMdHeart size={24} />
          ) : (
            <IoMdHeartEmpty size={24} />
          )}
        </IconButton>
      </div>
    </WineCardStyled>
  );
};

export default WineCard;
