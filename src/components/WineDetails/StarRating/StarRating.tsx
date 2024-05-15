import { FC, useState, useEffect } from 'react';
import { IProps } from './StarRating.types';
import {
  RatingActive,
  RatingBody,
  RatingItems,
  StarRatingStyled,
} from './StarRating.styled';

const StarRating: FC<IProps> = ({ data }) => {
  const [activeWidth, setActiveWidth] = useState(0);

  useEffect(() => {
    initRating(data);
  }, [data]);

  const initRating = (data: number) => {
    const ratingActiveWidth = (data / 5) * 100;
    setActiveWidth(ratingActiveWidth);
  };

  return (
    <StarRatingStyled>
     <RatingBody>
        <RatingActive style={{ width: `${activeWidth}%` }}></RatingActive>
        <RatingItems>
          {[...Array(5)].map((_, i) => (
            <input key={i} type='radio' />
          ))}
        </RatingItems>
     </RatingBody>
    </StarRatingStyled>
  );
};

export default StarRating;
