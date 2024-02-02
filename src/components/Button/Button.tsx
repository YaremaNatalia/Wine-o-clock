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
  transparentBody = false,
  onClick,
}) => (
  <StyledButton
    width={width}
    height={height}
    sidePadding={sidePadding}
    fontSize={fontSize}
    type={type}
    transparentBody={transparentBody}
    onClick={onClick}
  >
    {title}
  </StyledButton>
);

export default Button;
