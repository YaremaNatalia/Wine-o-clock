import { FC, useEffect, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import {
  DetailsWrapper,
  InfoWrapper,
  WineCardWrapper,
  WineDetailsLinks,
  WineDetailsStyled,
  WineWrapper,
} from './WineDetails.styled';
import WineReviews from './WineReviews';
import WineInfo from './WineInfo';
import WineDescription from './WineDescription';
import { IProps } from './WineDetails.types';
import { operations } from '@/tanStackQuery';
import WineListSection from '../WineListSection';
import StarRating from './StarRating';
import Container from '../Container';
import { AriaLabels, ButtonTypes, PagePaths } from '@/constants';
import { setFilterWines, setLocalStorage } from '@/utils';
import OutOfStock from '@/icons/out-of-stock.svg?react';
import IconButton from '../IconButton';
import { BtnClickEvent } from '@/types/types';
import toast from 'react-hot-toast';
import CustomToast from '../CustomToast';
import { useFavoritesContext } from '@/Context/ContextHooks';

const WineDetails: FC<IProps> = ({ wine }) => {
  const [isGeneralInfoActive, setIsGeneralInfoActive] = useState(true);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const { favoritesWines, setFavoritesWines } = useFavoritesContext();
  const allWines = operations.allWines()?.products;

  const bestsellers = setFilterWines.filterMainWines(
    allWines ?? [],
    'bestsellers'
  );

  const handleGeneralInfoClick = () => {
    setIsGeneralInfoActive(true);
    setIsDescriptionActive(false);
    setIsReviewsActive(false);
  };

  const handleDescriptionClick = () => {
    setIsDescriptionActive(true);
    setIsGeneralInfoActive(false);
    setIsReviewsActive(false);
  };

  const handleReviewsClick = () => {
    setIsReviewsActive(true);
    setIsDescriptionActive(false);
    setIsGeneralInfoActive(false);
  };

  const {
    _id,
    title,
    price,
    adminDiscountPercentage,
    description,
    bottleCapacity,
    alcohol,
    isNewCollection,
    wineColor,
    sugarConsistency,
    country,
    region,
    evaluation = 0,
    comments,
    imageUrl,
    quantity,
  } = wine ?? {};

  const handleFavoriteClick = (e: BtnClickEvent) => {
    e.stopPropagation();

    const isAdded = setLocalStorage.toggleFavorites(_id);
    if (isAdded) {
      toast.success(
        <CustomToast message={`Wine ${title} added to your favorites!`} />
      );
    } else {
      toast.success(
        <CustomToast message={`Wine ${title} removed from your favorites!`} />
      );
    }
    if (allWines) {
      const favorites = setLocalStorage.getFavorites(allWines);
      setFavoritesWines(favorites);
    }
    setIsInFavorites(isAdded);
    e.currentTarget.blur();
  };

  useEffect(() => {
    setIsInFavorites(favoritesWines.some((wine) => wine._id === _id));
  }, [favoritesWines, _id]);

  return (
    <WineDetailsStyled>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='Store'
        secondLink={PagePaths.storePath}
        thirdTitle={title}
      />
      <Container>
        <WineWrapper>
          <WineCardWrapper>
            <div className='nameWrapper'>
              <p className='wineName'>
                {wineColor} {sugarConsistency} wine "{title}" {bottleCapacity} L
              </p>
              <StarRating data={evaluation} />
            </div>
            <div className='imgWrapper'>
              <img className='wineImg' src={imageUrl} alt='Wine image' />
              <div className='iconsWrapper'>
                <div className='labelWrapper'>
                  {isNewCollection && <p className='wineNewLabel'>New</p>}
                  {adminDiscountPercentage > 0 && (
                    <p className='wineDiscountLabel'>
                      -{adminDiscountPercentage}%
                    </p>
                  )}
                </div>
              </div>
            </div>
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
              >
                {isInFavorites ? (
                  <IoMdHeart size={24} />
                ) : (
                  <IoMdHeartEmpty size={24} />
                )}
              </IconButton>
            </div>
          </WineCardWrapper>

          <InfoWrapper>
            <WineDetailsLinks>
              <a
                onClick={handleGeneralInfoClick}
                className={isGeneralInfoActive ? 'active' : ''}
              >
                General info
              </a>
              <a
                onClick={handleDescriptionClick}
                className={isDescriptionActive ? 'active' : ''}
              >
                Description
              </a>
              <a
                onClick={handleReviewsClick}
                className={isReviewsActive ? 'active' : ''}
              >
                Review ({comments?.length})
              </a>
            </WineDetailsLinks>
            <DetailsWrapper>
              {isGeneralInfoActive && (
                <WineInfo
                  _id={_id}
                  wineColor={wineColor}
                  sugarConsistency={sugarConsistency}
                  country={country}
                  region={region}
                  bottleCapacity={bottleCapacity}
                  alcohol={alcohol}
                  price={price}
                  title={title}
                  evaluation={evaluation}
                  quantity={quantity}
                />
              )}
              {isDescriptionActive && (
                <WineDescription description={description} />
              )}
              {isReviewsActive && comments && (
                <WineReviews reviews={comments} />
              )}
            </DetailsWrapper>
          </InfoWrapper>
        </WineWrapper>
      </Container>
      {bestsellers && bestsellers.length > 0 && (
        <WineListSection
          wines={bestsellers}
          sectionTitle='Bestsellers'
          componentTitle='WineDetails'
        />
      )}
    </WineDetailsStyled>
  );
};

export default WineDetails;
