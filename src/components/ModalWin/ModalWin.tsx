import { FC } from 'react';
import { IProps } from './ModalWin.types';
import { Backdrop, Container } from './ModalWin.styled';

const ModalWin: FC<IProps> = ({ children }) => (
  <Backdrop>
    <Container>{children}</Container>
  </Backdrop>
);

export default ModalWin;
