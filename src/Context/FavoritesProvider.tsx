import { FC, useState } from 'react';
import { IWine } from '@/types/types';
import Contexts from './Contexts';
import { IProps } from './Provider.types';

const FavoritesProvider: FC<IProps> = ({ children }) => {
  const [favoritesWines, setFavoritesWines] = useState<IWine[]>([]);

  return (
    <Contexts.FavoritesContext.Provider
      value={{ favoritesWines, setFavoritesWines }}
    >
      {children}
    </Contexts.FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
