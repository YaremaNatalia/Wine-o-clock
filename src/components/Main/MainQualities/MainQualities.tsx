import { FC } from 'react';

import Container from '@/components/Container';
import Section from '@/components/Section';
import { qualities } from '@/images/mainPage';
import {
  ContentWrapper,
  MainQualitiesStyled,
  QualitiesList,
  QualitiesPictureWrapper,
  QualitiesTitle,
} from './MainQualities.styled';

const MainQualities: FC = () => {
  return (
    <MainQualitiesStyled>
      <QualitiesPictureWrapper>
        <picture>
          <source
            srcSet={`${qualities.qualitiesDesk1xWebp} 1x, ${qualities.qualitiesDesk2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${qualities.qualitiesTab1xWebp} 1x, ${qualities.qualitiesTab2xWebp} 2x`}
            type='image/webp'
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${qualities.qualitiesMob1xWebp} 1x, ${qualities.qualitiesMob2xWebp} 2x`}
            type='image/webp'
            media='(max-width: 768px)'
          />
          <source
            srcSet={`${qualities.qualitiesDesk1xJpg} 1x, ${qualities.qualitiesDesk2xJpg} 2x,`}
            media='(min-width: 1440px)'
          />
          <source
            srcSet={`${qualities.qualitiesTab1xJpg} 1x, ${qualities.qualitiesTab2xJpg} 2x,`}
            media='(min-width: 768px)'
          />
          <source
            srcSet={`${qualities.qualitiesMob1xJpg} 1x, ${qualities.qualitiesMob2xJpg} 2x,`}
            media='(max-width: 768px)'
          />
          <img src={`${qualities.qualitiesMob1xJpg}`} alt='Hero image' />
        </picture>
        <ContentWrapper>
          <Section>
            <Container>
              <div className='textWrapper'>
                <QualitiesTitle>
                  a place <br /> for good wine
                </QualitiesTitle>
                <QualitiesList>
                  <li>
                    <h3>Quality first:</h3>
                    <p>
                      At wine o'clock, we always prioritize quality over cost.
                      Our team monitors each batch to guarantee you only the
                      best wines
                    </p>
                  </li>
                  <li>
                    <h3>Selection of exclusives:</h3>
                    <p>
                      We are constantly on the lookout for rare and unusual
                      wines that you won't find in regular stores. Our
                      collection is a real treasure for true connoisseurs of
                      wine.
                    </p>
                  </li>
                  <li>
                    <h3>Expert advice:</h3>
                    <p>
                      Our team of sommeliers are always on hand to give you
                      advice and guidance on choosing the right wine for you and
                      your evening.
                    </p>
                  </li>
                </QualitiesList>
              </div>
            </Container>
          </Section>
        </ContentWrapper>
      </QualitiesPictureWrapper>
    </MainQualitiesStyled>
  );
};

export default MainQualities;
