import { FC } from 'react';

import { setAnimationLetterSize, useWindowResize } from '@/utils';
import { storeHero } from '@/images/storePage';
import {
  Bg,
  HeroPictureWrapper,
  HeroStyled,
} from '@/components/WineTime/WineTimeHero/WineTimeHero.styled';

const StoreHero: FC = () => {
  const screenSize = useWindowResize();
  const TopHeroText = setAnimationLetterSize.setTopTextStore(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const BottomHeroText = setAnimationLetterSize.setBottomTextStore(
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
            srcSet={`${storeHero.storeDesk1xWebp} 1x, ${storeHero.storeDesk2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${storeHero.storeTab1xWebp} 1x, ${storeHero.storeTab2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${storeHero.storeMob1xWebp} 1x, ${storeHero.storeMob2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 320px)'
          />
          <source
            srcSet={`${storeHero.storeDesk1xJpg} 1x, ${storeHero.storeDesk2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${storeHero.storeTab1xJpg} 1x, ${storeHero.storeTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${storeHero.storeMob1xJpg} 1x, ${storeHero.storeMob2xJpg} 2x,`}
            media='(min-width: 320px)'
          />
          <Bg src={`${storeHero.storeMob1xJpg}`} alt='Store image' />
        </picture>
        <TopHeroText title='a place' className='topText' />
        <BottomHeroText title='for good wine' className='bottomText' />
      </HeroPictureWrapper>
    </HeroStyled>
  );
};

export default StoreHero;
