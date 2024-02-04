import { FC } from 'react';
import { Footer, Header, Main } from './SharedLayout.styled';
import NavLinks from '@/components/NavLinks';
import { navLinks } from '@/constants';
import { Outlet } from 'react-router-dom';
import PrivateLinks from '@/components/PrivateLinks';
import privateLinks from '@/constants/privateLinks';

const SharedLayout: FC = () => {
  return (
    <>
      <Header>
        <NavLinks navLinks={navLinks} />
        {/* searchBar */}
        <PrivateLinks navLinks={privateLinks} />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default SharedLayout;
