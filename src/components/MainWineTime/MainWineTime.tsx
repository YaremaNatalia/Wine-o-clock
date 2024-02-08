import { FC } from 'react';
import { ButtonDesign, ButtonTypes } from '@/constants';
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

const MainWineTime: FC = () => (
  <MainWineTimeStyled>
    <WineTimePictureWrapper>
      <picture>
        <source
          srcSet={`${wineTime.tab1xWebp}1x, ${wineTime.tab2xWebp}2x`}
          type='image/webp'
          media={'min-width: 1440px'}
        />
        <source
          srcSet={`${wineTime.tab1xWebp}1x, ${wineTime.tab2xWebp}2x`}
          type='image/webp'
          media={'min-width: 768px'}
        />
        <source
          srcSet={`${wineTime.mob1xWebp}1x, ${wineTime.mob2xWebp}2x`}
          type='image/webp'
          media={'min-width: 375px'}
        />
        <source
          srcSet={`${wineTime.tab1xJpg}1x, ${wineTime.tab2xJpg}2x,`}
          media={'min-width: 1440px'}
        />
        <source
          srcSet={`${wineTime.tab1xJpg}1x, ${wineTime.tab2xJpg}2x,`}
          media={'min-width: 768px'}
        />
        <source
          srcSet={`${wineTime.mob1xJpg}1x, ${wineTime.mob2xJpg}2x,`}
          media={'min-width: 375px'}
        />
        <MainWineTimeBg src={`${wineTime.mob1xJpg}`} alt='Wine time image' />
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
      <Button
        title='See more'
        width={327}
        height={41}
        sidePadding={20}
        fontSize={14}
        type={ButtonTypes.button}
        buttonDesign={ButtonDesign.white}
        onClick={(e) => {
          e.currentTarget.blur();
        }}
      />
    </MainWineTimeDescription>
  </MainWineTimeStyled>
);

export default MainWineTime;
