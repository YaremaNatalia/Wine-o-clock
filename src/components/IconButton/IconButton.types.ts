import { MouseEvent, ReactNode } from 'react';
import { AriaLabels, ButtonTypes } from '@/constants';

export interface IProps {
  btnSize: number;
  children: ReactNode;
  ariaLabel: AriaLabels;
  type?: ButtonTypes;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  btnSize: number;
}
