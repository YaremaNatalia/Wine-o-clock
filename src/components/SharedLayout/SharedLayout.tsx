import { FC } from 'react';
import { Footer, Header, Main } from './SharedLayout.styled';
import NavBar from '@/components/NavBar';
import { navLinks } from '@/constants';
import { Outlet } from 'react-router-dom';
import PrivateLinks from '@/components/PrivateLinks';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <NavBar navLinks={navLinks} />
        {/* searchBar */}
        <PrivateLinks />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
