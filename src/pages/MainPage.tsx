import MainHero from '@/components/MainHero';
import MainQualities from '@/components/MainQualities';
import MainWineTime from '@/components/MainWineTime';
import { FC } from 'react';

const MainPage: FC = () => (
  <>
    <MainHero />
    <MainWineTime />
    <MainQualities />
  </>
);

export default MainPage;
