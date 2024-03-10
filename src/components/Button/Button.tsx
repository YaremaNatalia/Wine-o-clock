import { FC } from 'react';
import { StyledButton } from './Button.styled';
import { IProps } from './Button.types';
import { ButtonTypes } from '@/constants';
import ButtonForms from '@/constants/buttonForms';

const Button: FC<IProps> = ({
  buttonForm = ButtonForms.button,
  title,
  width,
  type = ButtonTypes.button,
  buttonDesign,
  disabled,
  onClick,
}) => (
  <StyledButton
    buttonForm={buttonForm}
    width={width}
    type={type}
    onClick={onClick}
    buttonDesign={buttonDesign}
    disabled={disabled}
  >
    {title}
  </StyledButton>
);

export default Button;
