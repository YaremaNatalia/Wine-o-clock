import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
}

export interface IStyledProps {
  paddingTop: number;
  paddingBottom: number;
}
