import { FC } from 'react';
import AboutUsHero from './AboutUsHero';
import PageNavigation from '../PageNavigation';
import AboutUsInst from './AboutUsInst';
import { AboutUsStyled } from './AboutUs.styled';
import { PagePaths } from '@/constants';

const AboutUs: FC = () => {
  return (
    <AboutUsStyled>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='About us'
      />
      <AboutUsHero />
      <AboutUsInst />
    </AboutUsStyled>
  );
};

export default AboutUs;
