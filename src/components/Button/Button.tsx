import { FC } from 'react';
import { StyledButton } from './Button.styled';
import { IProps } from './Button.types';

const Button: FC<IProps> = ({
  title,
  onClick,
  width,
  height,
  padding,
  transparentBody = false,
}) => (
  <StyledButton
    width={width}
    height={height}
    padding={padding}
    transparentBody={transparentBody}
    onClick={onClick}
  >
    {title}
  </StyledButton>
);

export default Button;
