import { FC } from 'react';
import { StyledButton } from './Button.styled';
import { IProps } from './Button.types';
import { ButtonTypes } from '@/constants';

const Button: FC<IProps> = ({
  title,
  width,
  height = width,
  sidePadding,
  fontSize,
  type = ButtonTypes.button,
  buttonDesign,
  onClick,
}) => (
  <StyledButton
    width={width}
    height={height}
    sidePadding={sidePadding}
    fontSize={fontSize}
    type={type}
    onClick={onClick}
    buttonDesign={buttonDesign}
  >
    {title}
  </StyledButton>
);

export default Button;