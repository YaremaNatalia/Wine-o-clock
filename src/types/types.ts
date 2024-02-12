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

export interface ICredentials {
  email: string;
  password: string;
}
