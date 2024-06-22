import { FC } from 'react';

import { setAnimationLetterSize, setWindowResize,  } from '@/utils';
import { catalogHero } from '@/images/catalogPage';
import {
  Bg,
  HeroPictureWrapper,
  HeroStyled,
} from '@/components/WineTime/WineTimeHero/WineTimeHero.styled';

const CatalogHero: FC = () => {
  const screenSize = setWindowResize();
  const TopHeroText = setAnimationLetterSize.setTopTextCatalog(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const BottomHeroText = setAnimationLetterSize.setBottomTextCatalog(
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
            srcSet={`${catalogHero.catalogDesk1xWebp} 1x, ${catalogHero.catalogDesk2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${catalogHero.catalogTab1xWebp} 1x, ${catalogHero.catalogTab2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${catalogHero.catalogMob1xWebp} 1x, ${catalogHero.catalogMob2xWebp} 2x`}
            type='image/webp'
            media='(max-width: 768px)'
          />
          <source
            srcSet={`${catalogHero.catalogDesk1xJpg} 1x, ${catalogHero.catalogDesk2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${catalogHero.catalogTab1xJpg} 1x, ${catalogHero.catalogTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${catalogHero.catalogMob1xJpg} 1x, ${catalogHero.catalogMob2xJpg} 2x,`}
            media='(max-width: 768px)'
          />
          <Bg src={`${catalogHero.catalogMob1xJpg}`} alt='Catalog image' />
        </picture>
        <TopHeroText title='a place' className='topText' />
        <BottomHeroText title='for good wine' className='bottomText' />
      </HeroPictureWrapper>
    </HeroStyled>
  );
};

export default CatalogHero;
