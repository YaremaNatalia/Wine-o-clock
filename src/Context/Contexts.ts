import { createContext } from 'react';
import { IBasketContext, IFavoritesContext } from './Provider.types';


const FavoritesContext = createContext<IFavoritesContext | undefined>(undefined);

const BasketContext = createContext<IBasketContext | undefined>(undefined);


export default {
  FavoritesContext,
  BasketContext,
};
