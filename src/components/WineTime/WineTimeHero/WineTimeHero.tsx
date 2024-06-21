import { FC } from 'react';
import { wineTimeHero } from '@/images/wineTimePage';
import {
  Bg,
  HeroPictureWrapper,
  HeroStyled,
} from './WineTimeHero.styled';
import { setAnimationLetterSize, setWindowResize } from '@/utils';

const WineTimeHero: FC = () => {
  const screenSize = setWindowResize();
  const TopHeroText = setAnimationLetterSize.setTopTextWineTime(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const BottomHeroText = setAnimationLetterSize.setBottomTextWineTime(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  return (
    <HeroStyled>
      <HeroPictureWrapper>
        <picture>
          <source
            srcSet={`${wineTimeHero.wineDesk1xWebp} 1x, ${wineTimeHero.wineDesk2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${wineTimeHero.wineTab1xWebp} 1x, ${wineTimeHero.wineTab2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${wineTimeHero.wineMob1xWebp} 1x, ${wineTimeHero.wineMob2xWebp} 2x`}
            type='image/webp'
            media='(max-width: 768px)'
          />
          <source
            srcSet={`${wineTimeHero.wineDesk1xJpg} 1x, ${wineTimeHero.wineDesk2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${wineTimeHero.wineTab1xJpg} 1x, ${wineTimeHero.wineTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${wineTimeHero.wineMob1xJpg} 1x, ${wineTimeHero.wineMob2xJpg} 2x,`}
            media='(max-width: 768px)'
          />
          <Bg src={`${wineTimeHero.wineMob1xJpg}`} alt='Wine time image' />
        </picture>
        <TopHeroText title='wine time' className='topText' />
        <BottomHeroText title='every hour' className='bottomText' />
      </HeroPictureWrapper>
    </HeroStyled>
  );
};

export default WineTimeHero;
