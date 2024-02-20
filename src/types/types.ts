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

export type LinkClickEvent = MouseEvent<HTMLAnchorElement>;

export interface ICredentials {
  email: string;
  password: string;
}

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
  [key: string]: string | number | boolean | undefined;
}

export type IWineKeys = {
  [key: string]: string | number | boolean | undefined;
};

export interface INewUser {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}

