import { IWine } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
  basket?: boolean;
  wine: IWine;
  counterValue: number;
  setCounterValue: Dispatch<SetStateAction<number>>;
  isCartPending?: boolean;
  isInCart?: boolean;
}
