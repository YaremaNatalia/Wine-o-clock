import { FC } from 'react';
import {
  ChildrenWrapper,
  PriceWrapper,
  StyledButton,
} from './Button.styled';
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
  price,
  svg,
}) => (
  <StyledButton
    buttonForm={buttonForm}
    width={width}
    type={type}
    onClick={onClick}
    buttonDesign={buttonDesign}
    disabled={disabled}
  >
    <ChildrenWrapper>
      {svg && svg}
      {title}
      {price && <PriceWrapper>{price}</PriceWrapper>}
    </ChildrenWrapper>
  </StyledButton>
);

export default Button;
