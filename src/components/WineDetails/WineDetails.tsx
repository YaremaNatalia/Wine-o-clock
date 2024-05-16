import { FC, useState } from 'react';
import PageNavigation from '../PageNavigation';
import { IoMdHeartEmpty } from 'react-icons/io';

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
import { PagePaths } from '@/constants';

const WineDetails: FC<IProps> = ({ wine }) => {
  const [isGeneralInfoActive, setIsGeneralInfoActive] = useState(true);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  const data = operations.allWines();

  const bestsellers = data?.products
    .filter((wine) => wine.isBestSeller)
    .sort((a, b) => b.bottlesSoldCounter - a.bottlesSoldCounter);

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
              <p className='wineName'>{title}</p>
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
                <IoMdHeartEmpty />
              </div>
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
                  id={_id}
                  color={wineColor}
                  sweetness={sugarConsistency}
                  country={country}
                  region={region}
                  volume={bottleCapacity}
                  alcohol={alcohol}
                  price={price}
                  title={title}
                  rating={evaluation}
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
