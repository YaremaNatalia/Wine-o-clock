import { FC } from 'react';
import { ButtonDesign, PagePaths, theme } from '@/constants';
import Button from '@/components/Button';
import { mainWineTime } from '@/images/mainPage';
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
          srcSet={`${mainWineTime.wineTab1xWebp} 1x, ${mainWineTime.wineTab2xWebp} 2x`}
          type='image/webp'
          media={`(min-width: ${theme.breakpoints.desktop}px)`}
        />
        <source
          srcSet={`${mainWineTime.wineTab1xWebp} 1x, ${mainWineTime.wineTab2xWebp} 2x`}
          type='image/webp'
          media={`(min-width: ${theme.breakpoints.tablet}px)`}
        />
        <source
          srcSet={`${mainWineTime.wineMob1xWebp} 1x, ${mainWineTime.wineMob2xWebp} 2x`}
          type='image/webp'
          media={`(max-width: ${theme.breakpoints.tablet}px)`}
        />
        <source
          srcSet={`${mainWineTime.wineTab1xJpg} 1x, ${mainWineTime.wineTab2xJpg} 2x,`}
          media={`(min-width: ${theme.breakpoints.desktop}px)`}
        />
        <source
          srcSet={`${mainWineTime.wineTab1xJpg} 1x, ${mainWineTime.wineTab2xJpg} 2x,`}
          media={`(min-width: ${theme.breakpoints.tablet}px)`}
        />
        <source
          srcSet={`${mainWineTime.wineMob1xJpg} 1x, ${mainWineTime.wineMob2xJpg} 2x,`}
          media={`(max-width: ${theme.breakpoints.tablet}px)`}
        />
        <MainWineTimeBg
          src={`${mainWineTime.wineMob1xJpg}`}
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
      <Link to={PagePaths.aboutUsPath}>
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
