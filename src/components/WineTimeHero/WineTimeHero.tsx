import { FC } from 'react';

import { wineTimeHero } from '@/images/wineTimePage';
import { EveryHourHeroText, WineTimeBg, WineTimeHeroPictureWrapper, WineTimeHeroStyled, WineTimeHeroText } from './WineTimeHero.styled';


const WineTimeHero: FC = () => (
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
      <WineTimeHeroText>Wine time </WineTimeHeroText>
      <EveryHourHeroText>every hour</EveryHourHeroText>
    </WineTimeHeroPictureWrapper>
  </WineTimeHeroStyled>
);

export default WineTimeHero;
