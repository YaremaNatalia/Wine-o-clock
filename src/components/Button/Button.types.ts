import { MouseEvent } from 'react';

export interface IProps {
  title: string;
  width: number;
  height: number;
  padding: number;
  transparentBody?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  width: number;
  height: number;
  padding: number;
  transparentBody: boolean;
}
