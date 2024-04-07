import { FC } from 'react';

import { wineTimeHero } from '@/images/wineTimePage';
import WineTime from '@/icons/WINE TIME.svg?react';

import {
  SvgBottomLine,
  SvgTopLine,
  WineTimeBg,
  WineTimeHeroPictureWrapper,
  WineTimeHeroStyled,
} from './WineTimeHero.styled';
import { setAnimationLetterSize, useWindowResize } from '@/utils';

const WineTimeHero: FC = () => {
  const screenSize = useWindowResize();
  const topLetters = setAnimationLetterSize.setAnimationTopLetterWineTime(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const bottomLetters = setAnimationLetterSize.setAnimationBottomLetterWineTime(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  return (
    <WineTimeHeroStyled>
      <WineTimeHeroPictureWrapper>
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
            media='(min-width: 320px)'
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
            media='(min-width: 320px)'
          />
          <WineTimeBg
            src={`${wineTimeHero.wineMob1xJpg}`}
            alt='Wine time image'
          />
        </picture>
        <SvgTopLine>
          {topLetters.map((Letter, index) => (
            <Letter key={index} />
          ))}
        </SvgTopLine>

        <SvgBottomLine>
          {bottomLetters.map((Letter, index) => (
            <Letter key={index} />
          ))}
        </SvgBottomLine>
        <WineTime title='Wine time' />
      </WineTimeHeroPictureWrapper>
    </WineTimeHeroStyled>
  );
};

export default WineTimeHero;
