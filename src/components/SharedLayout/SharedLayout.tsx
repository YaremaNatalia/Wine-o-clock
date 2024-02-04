import { FC } from 'react';
import { Footer, Header, Main } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
