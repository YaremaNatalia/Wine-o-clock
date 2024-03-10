import { FC } from 'react';
import { ButtonDesign } from '@/constants';
import Button from '@/components/Button';
import { wineTime } from '@/images/mainPage';
import {
  EveryHourText,
  MainWineTimeBg,
  MainWineTimeDescription,
  MainWineTimeStyled,
  WineTimeText,
  WineTimePictureWrapper,
} from './MainWineTime.styled';
import { Link } from 'react-router-dom';

const MainWineTime: FC = () => (
  <MainWineTimeStyled>
    <WineTimePictureWrapper>
      <picture>
        <source
          srcSet={`${wineTime.wineTab1xWebp} 1x, ${wineTime.wineTab2xWebp} 2x`}
          type='image/webp'
          media='(min-width: 1440px)'
        />
        <source
          srcSet={`${wineTime.wineTab1xWebp} 1x, ${wineTime.wineTab2xWebp} 2x`}
          type='image/webp'
          media='(min-width: 768px)'
        />
        <source
          srcSet={`${wineTime.wineMob1xWebp} 1x, ${wineTime.wineMob2xWebp} 2x`}
          type='image/webp'
          media='(min-width: 320px)'
        />
        <source
          srcSet={`${wineTime.wineTab1xJpg} 1x, ${wineTime.wineTab2xJpg} 2x,`}
          media='(min-width: 1440px)'
        />
        <source
          srcSet={`${wineTime.wineTab1xJpg} 1x, ${wineTime.wineTab2xJpg} 2x,`}
          media='(min-width: 768px)'
        />
        <source
          srcSet={`${wineTime.wineMob1xJpg} 1x, ${wineTime.wineMob2xJpg} 2x,`}
          media='(min-width: 320px)'
        />
        <MainWineTimeBg
          src={`${wineTime.wineMob1xJpg}`}
          alt='Wine time image'
        />
      </picture>
      <WineTimeText>Wine time </WineTimeText>
      <EveryHourText>every hour</EveryHourText>
    </WineTimePictureWrapper>
    <MainWineTimeDescription>
      <h2>Wine o`clock</h2>
      <p>
        Every hour discounts on the best wines of the country. <br></br> All
        people need something that helps us calm down at the end of the day, a
        great way to fill this gap can be compensated through a glass of wine.
      </p>
      <Link to='/about-us'>
        <Button
          title='See more'
          buttonDesign={ButtonDesign.white}
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Link>
    </MainWineTimeDescription>
  </MainWineTimeStyled>
);

export default MainWineTime;
