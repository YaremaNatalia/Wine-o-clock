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
import { useQuery } from '@tanstack/react-query';
import { IAllWinesData, IWine } from '@/types/types';
import { QueryKeys, operations } from '@/tanStackQuery';
import Loader from '../Loader';
import NotFoundPage from '@/pages/NotFoundPage';
import WineListSection from '../WineListSection';

import StarRating from './StarRating';

import data from '../../utils/Data.json';
import Container from '../Container';

const WineDetails: FC<IProps> = ({ wine }) => {
  const [isGeneralInfoActive, setIsGeneralInfoActive] = useState(true);
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  // const { data, isLoading, isError } = useQuery<IAllWinesData>({
  //   queryFn: () => operations.getAllWines(),
  //   queryKey: [QueryKeys.wines],
  // });

  // if (isLoading) return <Loader />;
  // if (isError) {
  //   return <NotFoundPage />;
  // }

  const wineData = data?.data;
  const bestsellers = wineData
    ?.filter((wine) => wine.isBestSeller)
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
    id,
    wineName,
    price,
    adminDiscountPercentage,
    wineDescription,
    bottleCapacity,
    alcohol,
    isNewCollection,
    wineColor,
    sugarConsistency,
    country,
    region,
    evaluation = 0,
    wineComments,
    imageUrl,
    quantity,
  } = wine ?? {};

  return (
    <WineDetailsStyled>
      <PageNavigation
        firstTitle='Main page'
        secondTitle='Store'
        thirdTitle={wineName}
      />
      <Container>
        <WineWrapper>
          <WineCardWrapper>
            <div className='nameWrapper'>
              <p className='wineName'>{wineName}</p>
              <StarRating data={evaluation} />
            </div>
            <div className='imgWrapper'>
              <img className='wineImg' src={imageUrl} alt='Wine image' />
              <div className='iconsWrapper'>
                <div className='labelWrapper'>
                  {isNewCollection && <p className='wineNewLabel'>New</p>}
                  {adminDiscountPercentage && adminDiscountPercentage > 0 && (
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
                Review ({wineComments?.length})
              </a>
            </WineDetailsLinks>
            <DetailsWrapper>
              {isGeneralInfoActive && (
                <WineInfo
                  id={id}
                  color={wineColor}
                  sweetness={sugarConsistency}
                  country={country.name}
                  region={region.name}
                  volume={bottleCapacity}
                  alcohol={alcohol}
                  price={price}
                  name={wineName}
                  rating={evaluation}
                  quantity={quantity}
                />
              )}
              {isDescriptionActive && (
                <WineDescription description={wineDescription} />
              )}
              {isReviewsActive && wineComments && (
                <WineReviews reviews={wineComments} />
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
