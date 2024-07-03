import { FC } from 'react';
import {
  aboutUsHeroEveryHour,
  aboutUsHeroWineTime,
} from '@/images/aboutUsPage';
import { AboutUsHeroStyled, HeroPictureWrapper } from './AboutUsHero.styled';
import { setAnimationLetterSize, setWindowResize,  } from '@/utils';
import Container from '@/components/Container';
import { theme } from '@/constants';

const AboutUsHero: FC = () => {
  const screenSize = setWindowResize();
  const WineTimeSvg = setAnimationLetterSize.setTopTextAboutUs(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  const EveryHourSvg = setAnimationLetterSize.setBottomTextAboutUs(
    screenSize.isMobileScreen
      ? 'mobile'
      : screenSize.isTabletScreen
      ? 'tablet'
      : 'desktop'
  );

  return (
    <Container>
      <AboutUsHeroStyled>
        <h2 className='aboutUsTitle'>
          Discovering the world of taste and time
        </h2>
        <p className='firstParagraph'>
          Our family has always believed that the true taste of wine is revealed
          at a special time. That is why we decided to name our brand "wine
          o'clock". It was a recognition that every moment in life is a great
          time for wine, for discovering new flavors and traveling through
          gastronomic heaven.
        </p>
        <HeroPictureWrapper className='wineTimeImgWrap'>
          <picture>
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTDesk1xWebp} 1x, ${aboutUsHeroWineTime.heroWTDesk2xWebp} 2x`}
              type='image/webp'
              media={`(min-width: ${theme.breakpoints.desktop}px)`}
            />
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTTab1xWebp} 1x, ${aboutUsHeroWineTime.heroWTTab2xWebp} 2x`}
              type='image/webp'
              media={`(min-width: ${theme.breakpoints.tablet}px)`}
            />
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTMob1xWebp} 1x, ${aboutUsHeroWineTime.heroWTMob2xWebp} 2x`}
              type='image/webp'
              media={`(max-width: ${theme.breakpoints.tablet}px)`}
            />
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTDesk1xJpg} 1x, ${aboutUsHeroWineTime.heroWTDesk2xJpg} 2x,`}
              media={`(min-width: ${theme.breakpoints.desktop}px)`}
            />
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTTab1xJpg} 1x, ${aboutUsHeroWineTime.heroWTTab2xJpg} 2x,`}
              media={`(min-width: ${theme.breakpoints.tablet}px)`}
            />
            <source
              srcSet={`${aboutUsHeroWineTime.heroWTMob1xJpg} 1x, ${aboutUsHeroWineTime.heroWTMob2xJpg} 2x,`}
              media={`(max-width: ${theme.breakpoints.tablet}px)`}
            />
            <img
              src={`${aboutUsHeroWineTime.heroWTMob1xJpg}`}
              alt='Hero wine time image'
            />
          </picture>
          <WineTimeSvg title='wine time' className='topSvg' />
        </HeroPictureWrapper>
        <p className='middleParagraph'>
          Our wines are not just drinks. These are the capillaries of the sun,
          preserved in each bottle. This is a tasting of history and traditions,
          a story about our land and culture.
        </p>
        <HeroPictureWrapper className='everyHourImgWrap'>
          <picture>
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHDesk1xWebp} 1x, ${aboutUsHeroEveryHour.heroEHDesk2xWebp} 2x`}
              type='image/webp'
              media='(min-width: 1440px)'
            />
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHTab1xWebp} 1x, ${aboutUsHeroEveryHour.heroEHTab2xWebp} 2x`}
              type='image/webp'
              media='(min-width: 768px)'
            />
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHMob1xWebp} 1x, ${aboutUsHeroEveryHour.heroEHMob2xWebp} 2x`}
              type='image/webp'
              media='(max-width: 768px)'
            />
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHDesk1xJpg} 1x, ${aboutUsHeroEveryHour.heroEHDesk2xJpg} 2x,`}
              media='(min-width: 1440px)'
            />
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHTab1xJpg} 1x, ${aboutUsHeroEveryHour.heroEHTab2xJpg} 2x,`}
              media='(min-width: 768px)'
            />
            <source
              srcSet={`${aboutUsHeroEveryHour.heroEHMob1xJpg} 1x, ${aboutUsHeroEveryHour.heroEHMob2xJpg} 2x,`}
              media='(max-width: 768px)'
            />
            <img
              src={`${aboutUsHeroEveryHour.heroEHMob1xJpg}`}
              alt='Hero image'
            />
          </picture>
          <EveryHourSvg title='Every hour' className='bottomSvg' />
        </HeroPictureWrapper>
        <p className='lastParagraph'>
          We believe that every moment can be "wine o'clock". Our goal is to
          give you the best wine for each of you and teach you to enjoy every
          sip, moment and hour. Join us on this journey through the world of
          taste and time.
        </p>
      </AboutUsHeroStyled>
    </Container>
  );
};

export default AboutUsHero;
