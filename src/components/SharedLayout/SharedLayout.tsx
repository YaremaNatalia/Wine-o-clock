import { FC } from 'react';
import {  Header, Main } from './SharedLayout.styled';
import Footer from '@/components/Footer';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default SharedLayout;
