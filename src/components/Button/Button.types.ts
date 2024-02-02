import { ButtonTypes } from '@/constants';
import { MouseEvent } from 'react';

export interface IProps {
  title: string;
  width: number;
  height?: number;
  sidePadding: number;
  fontSize: number;
  type?: ButtonTypes;
  transparentBody?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  width: number;
  height: number;
  sidePadding: number;
  fontSize: number;
  transparentBody: boolean;
}
