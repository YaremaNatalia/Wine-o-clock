import { FC } from 'react';
import { IProps } from './WineReviews.types';
import { Name, Review, WineReviewsStyled } from './WineReviews.styled';
import ReviewForm from '../ReviewForm';

const WineReviews: FC<IProps> = ({ reviews }) => {
  return (
    <>
      <WineReviewsStyled>
        {reviews
          .sort(
            (a, b) =>
              new Date(b.addedCommentTime).getTime() -
              new Date(a.addedCommentTime).getTime()
          )
          .map((review) => {
            const { id, userFirstName, userLastName, comment } = review;
            return (
              <Review key={id}>
                <Name>
                  <p>{userFirstName}</p>
                  <p>{userLastName}</p>
                </Name>
                <p>{comment}</p>
              </Review>
            );
          })}
      </WineReviewsStyled>
      <ReviewForm />
    </>
  );
};

export default WineReviews;
