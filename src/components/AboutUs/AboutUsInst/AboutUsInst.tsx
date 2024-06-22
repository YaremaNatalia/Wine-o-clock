import Container from '@/components/Container';
import Section from '@/components/Section';
import { FC } from 'react';
import { AboutUsInstStyled, PictureList } from './AboutUsInst.styled';
import {
  aboutUsClock,
  aboutUsMeal,
  aboutUsWine,
  aboutUsWines,
} from '@/images/aboutUsPage';

const AboutUsInst: FC = () => {
  return (
    <Container>
      <Section>
        <AboutUsInstStyled>
          <p>Instagram</p>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            aria-label='Instagram'
            rel='noopener noreferrer nofollow'
          >
            @WINEOCLOCK
          </a>
          <PictureList>
            <li>
              <picture>
                <source
                  srcSet={`${aboutUsClock.clockDesk1xWebp} 1x, ${aboutUsClock.clockDesk2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsClock.clockTab1xWebp} 1x, ${aboutUsClock.clockTab2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsClock.clockMob1xWebp} 1x, ${aboutUsClock.clockMob2xWebp} 2x`}
                  type='image/webp'
                  media='(max-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsClock.clockDesk1xJpg} 1x, ${aboutUsClock.clockDesk2xJpg} 2x,`}
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsClock.clockTab1xJpg} 1x, ${aboutUsClock.clockTab2xJpg} 2x,`}
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsClock.clockMob1xJpg} 1x, ${aboutUsClock.clockMob2xJpg} 2x,`}
                  media='(max-width: 768px)'
                />
                <img src={`${aboutUsClock.clockMob1xJpg}`} alt='Clock' />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  srcSet={`${aboutUsWines.winesDesk1xWebp} 1x, ${aboutUsWines.winesDesk2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsWines.winesTab1xWebp} 1x, ${aboutUsWines.winesTab2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsWines.winesMob1xWebp} 1x, ${aboutUsWines.winesMob2xWebp} 2x`}
                  type='image/webp'
                  media='(max-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsWines.winesDesk1xJpg} 1x, ${aboutUsWines.winesDesk2xJpg} 2x,`}
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsWines.winesTab1xJpg} 1x, ${aboutUsWines.winesTab2xJpg} 2x,`}
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsWines.winesMob1xJpg} 1x, ${aboutUsWines.winesMob2xJpg} 2x,`}
                  media='(max-width: 768px)'
                />
                <img src={`${aboutUsWines.winesMob1xJpg}`} alt='Wines' />
              </picture>
            </li>
            <li className='thirdPicture'>
              <picture>
                <source
                  srcSet={`${aboutUsWine.wineDesk1xWebp} 1x, ${aboutUsWine.wineDesk2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsWine.wineTab1xWebp} 1x, ${aboutUsWine.wineTab2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsWine.wineDesk1xJpg} 1x, ${aboutUsWine.wineDesk2xJpg} 2x,`}
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsWine.wineTab1xJpg} 1x, ${aboutUsWine.wineTab2xJpg} 2x,`}
                  media='(min-width: 768px)'
                />
                <img src={`${aboutUsWine.wineTab1xJpg}`} alt='Wine' />
              </picture>
            </li>
            <li className='fourthPicture'>
              <picture>
                <source
                  srcSet={`${aboutUsMeal.mealDesk1xWebp} 1x, ${aboutUsMeal.mealDesk2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsMeal.mealTab1xWebp} 1x, ${aboutUsMeal.mealTab2xWebp} 2x`}
                  type='image/webp'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet={`${aboutUsMeal.mealDesk1xJpg} 1x, ${aboutUsMeal.mealDesk2xJpg} 2x,`}
                  media='(min-width: 1440px)'
                />
                <source
                  srcSet={`${aboutUsMeal.mealTab1xJpg} 1x, ${aboutUsMeal.mealTab2xJpg} 2x,`}
                  media='(min-width: 768px)'
                />
                <img src={`${aboutUsMeal.mealTab1xJpg}`} alt='Meal' />
              </picture>
            </li>
          </PictureList>
        </AboutUsInstStyled>
      </Section>
    </Container>
  );
};

export default AboutUsInst;
