import { AriaLabels, FormTypes, PagePaths } from '@/constants';
import ButtonForms from '@/constants/buttonForms';
import { MouseEvent } from 'react';
import { IconType } from 'react-icons';

export interface ISetInputStyleProps {
  formType: FormTypes;
  breakpoint?: number;
}

export interface ISetButtonStyleProps {
  buttonForm: ButtonForms;
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
  _id: number;
  title: string;
  price: number;
  adminDiscountPercentage: number;
  description: string;
  quantity: number;
  bottleCapacity: number;
  alcohol: number;
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
  country: string;
  region: string;
  evaluation?: number;
  // comments?: IComment[];
  comments?: [];
  bottlesSoldCounter: number;
  // addedDateTime: string;
  imageUrl: string;
  // [key: string]:
  //   | string
  //   | number
  //   | boolean
  //   | ICountry
  //   | IRegion
  //   | IComment[]
  //   | undefined;
}

// export interface IAllWinesData {
//   data: IWine[];
//   page?: number;
//   limit?: number;
//   totalElements?: number;
//   totalPages?: number;
// }

export interface IAllWinesData {
  products: IWine[];
  count: number;
}

// export interface ICountry {
//   id: number;
//   name: string;
// }

// export interface DataDTO {
//   data: IWine[];
//   page?: number;
//   limit?: number;
//   totalElements?: number;
//   totalPages?: number;
// }
// export interface IPromData {
//   dataDTO: DataDTO;
//   producedCountryList: ICountry[];
// }

// export interface IRegion {
//   id: number;
//   name: string;
// }

export interface IComment {
  id: number;
  userFirstName: string;
  userLastName: string;
  comment: string;
  addedCommentTime: string;
}

export interface INewUser {
  email: string;
  password: string;
  confirmationThePassword: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export type ConfOfReg = Pick<INewUser, 'password'>;

export interface IPagination<T> {
  currentPage: number;
  currentItems: T[];
  totalPages: number;
  toNextPage: () => void;
  toPrevPage: () => void;
}

export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export interface AxiosError {
  response: { data: { message: string } };
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  deliveryAddress: string;
  favorites: IWine[];
}
