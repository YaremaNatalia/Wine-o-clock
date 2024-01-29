import { FC } from 'react';
import { Footer, Header, Main } from './SharedLayout.styled';

export const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
