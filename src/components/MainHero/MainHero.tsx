import { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { hero } from '@/images/mainPage';
import {
  HeroPictureWrapper,
  HeroTitle,
  MainHeroStyled,
  SvgBottomLine,
  SvgTopLine,
} from './MainHero.styled';
import { setAnimationLetterSize, useWindowResize } from '@/utils';
import { PagePaths } from '@/constants';


const MainHero: FC = () => {
  const screenSize = useWindowResize();
  const topLetters = setAnimationLetterSize.setAnimationTopLetterSize(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const bottomLetters = setAnimationLetterSize.setAnimationBottomLetterSize(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );
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
        <Link to={PagePaths.storePath}>
          <Button
            title='Shop now'
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
          {topLetters.map((Letter, index) => (
            <Letter key={index} />
          ))}
        </SvgTopLine>

        <SvgBottomLine>
          {bottomLetters.map((Letter, index) => (
            <Letter key={index} />
          ))}
        </SvgBottomLine>
      </HeroPictureWrapper>
    </MainHeroStyled>
  );
};

export default MainHero;
