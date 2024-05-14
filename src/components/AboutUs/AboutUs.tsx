import { FC } from 'react';
import AboutUsHero from './AboutUsHero';
import PageNavigation from '../PageNavigation';
import AboutUsInst from './AboutUsInst';
import { AboutUsStyled } from './AboutUs.styled';

const AboutUs: FC = () => {
  return (
    <AboutUsStyled>
      <PageNavigation firstPageTitle='Main page' secondPageTitle='About us' />
      <AboutUsHero />
      <AboutUsInst />
    </AboutUsStyled>
  );
};

export default AboutUs;
