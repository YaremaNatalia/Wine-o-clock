import { FC, useState } from 'react';
import { IWine } from '@/types/types';
import { IProps } from './Provider.types';
import Contexts from './Contexts';


const BasketProvider: FC<IProps> = ({ children }) => {
  const [basketWines, setBasketWines] = useState<IWine[]>([]);

  return (
    <Contexts.BasketContext.Provider value={{ basketWines, setBasketWines }}>
      {children}
    </Contexts.BasketContext.Provider>
  );
};




export default  BasketProvider;




