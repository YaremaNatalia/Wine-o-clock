import { FC } from 'react';
import { Footer, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
