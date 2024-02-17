import { FC } from 'react';
import { StyledButton } from './Button.styled';
import { IProps } from './Button.types';
import { ButtonTypes } from '@/constants';

const Button: FC<IProps> = ({
  title,
  width,
  height,
  sidePadding,
  fontSize,
  type = ButtonTypes.button,
  buttonDesign,
  disabled,
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
    disabled={disabled}
  >
    {title}
  </StyledButton>
);

export default Button;
