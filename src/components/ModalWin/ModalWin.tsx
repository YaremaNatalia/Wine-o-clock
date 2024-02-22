import { FC, useEffect } from 'react';
import { IProps } from './ModalWin.types';
import { Backdrop, Container } from './ModalWin.styled';

const ModalWin: FC<IProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <Backdrop>
      <Container>{children}</Container>
    </Backdrop>
  );
};

export default ModalWin;
