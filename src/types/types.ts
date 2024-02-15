import { AriaLabels, FormTypes, PagePaths } from '@/constants';
import { MouseEvent } from 'react';
import { IconType } from 'react-icons';

export interface ISetInputStyleProps {
  formType: FormTypes;
  breakpoint?: number;
}

export interface INavLink {
  href: string;
  title: string;
}

export type NavLinks = Readonly<INavLink[]>;

export interface IPrivateLink {
  title: string;
  href: PagePaths;
  icon: IconType;
  ariaLabel: AriaLabels;
}

export type PrivateLinks = Readonly<IPrivateLink[]>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export interface IWine {
  _id: string;
  name: string;
  photo: string;
  color: string;
  sweetness: string;
  country: string;
  region?: string;
  volume: string;
  alcohol: string;
  price: number;
  description: string;
  number_in_stock: number;
  sale?: boolean;
  discount?: number;
}

export type IWineKeys = {
  [key: string]: string | number | boolean | undefined;
};
