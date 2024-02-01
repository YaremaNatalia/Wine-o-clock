import { FC } from 'react';
import { Footer, Header, Main } from './SharedLayout.styled';

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
