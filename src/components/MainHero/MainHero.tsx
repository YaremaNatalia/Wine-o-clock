import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import { ButtonTypes, theme } from '@/constants';
import Button from '@/components/Button';
import { hero } from '@/images/mainPage';
import W from '@/icons/letters/mob/wIcon.svg?react';
import E from '@/icons/letters/mob/eIcon.svg?react';
import L from '@/icons/letters/mob/lIcon.svg?react';
import O from '@/icons/letters/mob/oIcon.svg?react';
import V from '@/icons/letters/mob/vIcon.svg?react';
import I from '@/icons/letters/mob/iIcon.svg?react';
import F from '@/icons/letters/mob/fIcon.svg?react';
import N from '@/icons/letters/mob/nIcon.svg?react';
import D from '@/icons/letters/mob/dIcon.svg?react';
import A from '@/icons/letters/mob/aIcon.svg?react';

import WTab from '@/icons/letters/tab/wTab.svg?react';
import ETab from '@/icons/letters/tab/eTab.svg?react';
import LTab from '@/icons/letters/tab/lTab.svg?react';
import OTab from '@/icons/letters/tab/oTab.svg?react';
import VTab from '@/icons/letters/tab/vTab.svg?react';
import ITab from '@/icons/letters/tab/iTab.svg?react';
import FTab from '@/icons/letters/tab/fTab.svg?react';
import NTab from '@/icons/letters/tab/nTab.svg?react';
import DTab from '@/icons/letters/tab/dTab.svg?react';
import ATab from '@/icons/letters/tab/aTab.svg?react';

import WDesk from '@/icons/letters/desk/wDesc.svg?react';
import EDesk from '@/icons/letters/desk/eDesc.svg?react';
import LDesk from '@/icons/letters/desk/lDesc.svg?react';
import ODesk from '@/icons/letters/desk/oDesk.svg?react';
import VDesk from '@/icons/letters/desk/vDesk.svg?react';
import IDesk from '@/icons/letters/desk/iDesk.svg?react';
import FDesk from '@/icons/letters/desk/fDesk.svg?react';
import NDesk from '@/icons/letters/desk/nDesk.svg?react';
import DDesk from '@/icons/letters/desk/dDesk.svg?react';
import ADesk from '@/icons/letters/desk/aDesk.svg?react';

import {
  HeroPictureWrapper,
  HeroTitle,
  MainHeroStyled,
  SvgBottomLine,
  SvgTopLine,
} from './MainHero.styled';

const MainHero: FC = () => {
  const [screenSize, setScreenSize] = useState({
    isDesktopScreen:
      typeof window !== 'undefined' &&
      window.innerWidth >= theme.breakpoints.desktop,
    isTabletScreen:
      window.innerWidth >= theme.breakpoints.tablet &&
      window.innerWidth < theme.breakpoints.desktop,
    isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesktopScreen: window.innerWidth >= theme.breakpoints.desktop,
        isTabletScreen:
          window.innerWidth >= theme.breakpoints.tablet &&
          window.innerWidth < theme.breakpoints.desktop,
        isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [screenSize]);

  return (
    <MainHeroStyled>
      <Container>
        <HeroTitle>
          <span className='firstHeroLine'>buy craft wine</span> <br />
          from our catalog <br />
          <span className='thirdHeroLine'>
            with <span className='freeDelivery'>free delivery</span>
          </span>
        </HeroTitle>
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
            srcSet={`${hero.heroDesk1xWebp} 1x, ${hero.heroDesk2xWebp} 2x`}
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
            media='(min-width: 320px)'
          />
          <source
            srcSet={`${hero.heroDesk1xJpg} 1x, ${hero.heroDesk2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${hero.heroTab1xJpg} 1x, ${hero.heroTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${hero.heroMob1xJpg} 1x, ${hero.heroMob2xJpg} 2x,`}
            media='(min-width: 320px)'
          />
          <img src={`${hero.heroMob1xJpg}`} alt='Hero image' />
        </picture>

        <SvgTopLine>
          {screenSize.isMobileScreen ? (
            <>
              <W />
              <E />
              <L />
              <O />
              <V />
              <E />
              <L />
              <I />
              <F />
              <E />
            </>
          ) : screenSize.isTabletScreen ? (
            <>
              <WTab />
              <ETab />
              <LTab />
              <OTab />
              <VTab />
              <ETab />
              <LTab />
              <ITab />
              <FTab />
              <ETab />
            </>
          ) : (
            <>
              <WDesk />
              <EDesk />
              <LDesk />
              <ODesk />
              <VDesk />
              <EDesk />
              <LDesk />
              <IDesk />
              <FDesk />
              <EDesk />
            </>
          )}
        </SvgTopLine>

        <SvgBottomLine>
          {screenSize.isMobileScreen ? (
            <>
              <A />
              <N />
              <D />
              <W />
              <I />
              <N />
              <E />
            </>
          ) : screenSize.isTabletScreen ? (
            <>
              <ATab />
              <NTab />
              <DTab />
              <WTab />
              <ITab />
              <NTab />
              <ETab />
            </>
          ) : (
            <>
              <ADesk />
              <NDesk />
              <DDesk />
              <WDesk />
              <IDesk />
              <NDesk />
              <EDesk />
            </>
          )}
        </SvgBottomLine>
      </HeroPictureWrapper>
    </MainHeroStyled>
  );
};

export default MainHero;
