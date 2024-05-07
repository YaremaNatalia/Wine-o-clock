import { ButtonDesign, ButtonTypes } from '@/constants';
import ButtonForms from '@/constants/buttonForms';
import { MouseEvent, ReactNode } from 'react';

export interface IProps {
  buttonForm?: ButtonForms;
  title: string;
  width?: number;
  type?: ButtonTypes;
  transparentBody?: boolean;
  buttonDesign?: ButtonDesign;
  disabled?: boolean;
  svg?: ReactNode;
  price?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  buttonForm: ButtonForms;
  width?: number;
  buttonDesign: ButtonDesign | undefined;
  price?: string;
  svg?: ReactNode;
}
