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
  _id: string;
  title: string;
  price: number;
  adminDiscountPercentage: number;
  description: string;
  quantity: number;
  // amount?: number;
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
  // numberToOrder?: number;
  [key: string]:
    | string
    | number
    | boolean
    // | ICountry
    // | IRegion
    | IComment[]
    | undefined;
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
  password?: string;
  passwordRepeat?: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  deliveryAddress?: string;
  birthDate?: string;
  deliveryType?: string;
  notCall?: boolean;
  personalDataConsent?: boolean;
  agree?: boolean;
}

export type ConfOfReg = Pick<INewUser, 'password'>;

export interface IPagination {
  currentPage: number;
  currentItems: IWine[];
  totalPages: number;
  toNextPage: () => void;
  toPrevPage: () => void;
}

export interface IOption {
  value: string;
  label: string;
}

export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export interface AxiosError {
  response: { data: { message: string } };
}

export interface IUser {
  email: string;
  phoneNumber?: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  deliveryAddress?: string;
  favorites?: string[];
  cart?: CartItem[];
  orders?: IOrder[];
  reviews?: IComment[];
}

export interface IOrder {
  id: number;
  title: string;
  price: number;
  numberToOrder: number;
  total: number;
  orderDate: string;
}

export interface IPage {
  isLoading: boolean;
  isError: boolean;
  isFetching?: boolean;
}

export interface IAddBasketMutation {
  wine: IWine;
  amount?: number;
}

export interface CartItem {
  id?: string;
  productId: string;
  amount: number;
}

export type FilterType =
  | 'collections'
  | 'color'
  | 'sweetness'
  | 'country'
  | 'region';
