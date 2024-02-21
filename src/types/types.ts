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
  id: number;
  wineName: string;
  price: number;
  adminDiscountPercentage: number;
  wineDescription: string;
  quantity: number;
  bottleCapacity: string;
  alcohol: string;
  isNewCollection: boolean;
  isBestSeller: boolean;
  isSale: boolean;
  isWineTimePromotion: boolean;
  winemaking: string;
  grapeVarieties: string;
  tastingNotes: string;
  storeAndServeAdvices: string;
  foodPairing: string;
  reviewsAndAwards?: string;
  wineColor: string;
  sugarConsistency: string;
  country: ICountry;
  region: IRegion;
  evaluation?: number;
  wineComments?: IComment[];
  bottlesSoldCounter: number;
  addedDateTime: string;
  imageUrl: string;
  [key: string]:
    | string
    | number
    | boolean
    | ICountry
    | IRegion
    | IComment[]
    | undefined;
}

export interface ICountry {
  id: number;
  name: string;
}

export interface IRegion {
  id: number;
  name: string;
}

export interface IComment {
  id: number;
  userFirstName: string;
  userLastName: string;
  comment: string;
  addedCommentTime: string;
}

export interface INewUser {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}