import { FormTypes } from '@/constants';

export interface ISetInputStyleProps {
  formType: FormTypes;
  breakpoint?: number;
}

export interface INavLink {
  href: string;
  title: string;
}

export type NavLinks = Readonly<INavLink[]>;
