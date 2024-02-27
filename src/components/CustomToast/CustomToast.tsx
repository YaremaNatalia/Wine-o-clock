import { FC } from 'react';
import { IProps } from './CustomToast.types';
import { CustomToastStyled } from './CustomToast.styled';



const CustomToast: FC<IProps> = ({ message }) => (
  <CustomToastStyled>{message}</CustomToastStyled>
);

export default CustomToast;
