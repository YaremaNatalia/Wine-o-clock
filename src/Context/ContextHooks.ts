import { useContext } from 'react';
import Contexts from './Contexts';

export const useFavoritesContext = () => {
  const context = useContext(Contexts.FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavoritesContext must be used within a FavoritesProvider'
    );
  }
  return context;
};

export const useBasketContext = () => {
  const context = useContext(Contexts.BasketContext);
  if (!context) {
    throw new Error('useBasketContext must be used within a BasketProvider');
  }
  return context;
};

export default {
  useFavoritesContext,
  useBasketContext,
};
