import { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { ButtonTypes } from '@/constants';
import Button from '@/components/Button';
import { hero } from '@/images/mainPage';
import W from '@/icons/wIcon.svg?react';
import E from '@/icons/eIcon.svg?react';
import L from '@/icons/lIcon.svg?react';
import O from '@/icons/oIcon.svg?react';
import V from '@/icons/wIcon.svg?react';
import I from '@/icons/iIcon.svg?react';
import F from '@/icons/fIcon.svg?react';
import N from '@/icons/nIcon.svg?react';
import D from '@/icons/dIcon.svg?react';
import A from '@/icons/aIcon.svg?react';
import {

  HeroPictureWrapper,
  HeroTextWrapper,
  MainHeroStyled,
  SvgBottomLine,
  SvgTopLine,

} from './MainHero.styled';

const MainHero: FC = () => (
  <Section>
    <MainHeroStyled>
      <Container>
        <HeroTextWrapper>
          <h1 className='firstHeroLine'>buy craft wine</h1>
          <h1 className='secondHeroLine'>from our catalog</h1>
          <h1 className='thirdHeroLine'>
            with <span>free delivery</span>
          </h1>
        </HeroTextWrapper>
        <p>
          All people need something that helps us calm down at the end of the
          day, a great way to fill this gap can be compensated through a glass
          of wine.
        </p>
        <Link to='/store'>
          <Button
            title='Shop now'
            width={327}
            height={43}
            sidePadding={20}
            fontSize={14}
            type={ButtonTypes.button}
            onClick={(e) => {
              e.currentTarget.blur();
            }}
          />
        </Link>
      </Container>
      <HeroPictureWrapper>
        <picture>
          <source
            srcSet={`${hero.heroDesc1xWebp} 1x, ${hero.heroDesc2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${hero.heroTab1xWebp} 1x, ${hero.heroTab2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${hero.heroMob1xWebp} 1x, ${hero.heroMob2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 375px)'
          />
          <source
            srcSet={`${hero.heroDesc1xJpg} 1x, ${hero.heroDesc2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${hero.heroTab1xJpg} 1x, ${hero.heroTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${hero.heroMob1xJpg} 1x, ${hero.heroMob2xJpg} 2x,`}
            media='(min-width: 375px)'
          />
          <img src={`${hero.heroMob1xJpg}`} alt='Hero image' />
        </picture>
    
          <SvgTopLine>
            <div className='we'>
              <W />
              <E />
            </div>
            <div className='love'>
              <L />
              <O />
              <V />
              <E />
            </div>
            <div className='life'>
              <L />
              <I />
              <F />
              <E />
            </div>
          </SvgTopLine>
          <SvgBottomLine>
            <div className='end'>
              <A />
              <N />
              <D />
            </div>
            <div className='wine'>
              <W />
              <I />
              <N />
              <E />
            </div>
          </SvgBottomLine>
       
      </HeroPictureWrapper>
    </MainHeroStyled>
  </Section>
);

export default MainHero;
