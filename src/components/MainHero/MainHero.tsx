import { FC } from 'react';
import { ButtonDesign, ButtonTypes } from '@/constants';
import Button from '@/components/Button';
import { wineTime } from '@/images/mainPage';
import {
  HeroBg,
  HeroPictureWrapper,
  HeroTextWrapper,
  MainHeroStyled,
  SvgWrapper,
} from './MainHero.styled';
import Container from '../Container';
import Section from '../Section';

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
        <Button
          title='Shop now'
          width={327}
          height={41}
          sidePadding={20}
          fontSize={14}
          type={ButtonTypes.button}
          buttonDesign={ButtonDesign.burgundy}
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Container>
      <HeroPictureWrapper>
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
          <HeroBg src={`${wineTime.mob1xJpg}`} alt='Wine time image' />
        </picture>
      </HeroPictureWrapper>
      <SvgWrapper>
        <div className='firstSvgLine'></div>
        <div className='secondSvgLine'></div>
      </SvgWrapper>
    </MainHeroStyled>
  </Section>
);

export default MainHero;
