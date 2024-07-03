import { FC } from 'react';
import AboutUsHero from './AboutUsHero';
import PageNavigation from '../PageNavigation';
import AboutUsInst from './AboutUsInst';
import { PagePaths } from '@/constants';

const AboutUs: FC = () => {
  return (
    <>
      <PageNavigation
        firstTitle='Main page'
        firstLink={PagePaths.homePath}
        secondTitle='About us'
      />
      <AboutUsHero />
      <AboutUsInst />
    </>
  );
};

export default AboutUs;
