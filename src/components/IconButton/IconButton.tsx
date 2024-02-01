import { FC } from 'react';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';
import { ButtonTypes } from '@/constants';

const IconButton: FC<IProps> = ({
  btnSize,
  children,
  ariaLabel,
  type = ButtonTypes.button,
  onClick,
}) => (
  <Button
    btnSize={btnSize}
    aria-label={ariaLabel}
    onClick={onClick}
    type={type}
  >
    {children}
  </Button>
);

export default IconButton;
