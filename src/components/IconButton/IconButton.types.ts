import { MouseEvent, ReactNode } from 'react';
import { AriaLabels, ButtonTypes } from '@/constants';

export interface IProps {
  btnSize: number;
  children: ReactNode;
  ariaLabel: AriaLabels;
  type?: ButtonTypes;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  btnSize: number;
}
