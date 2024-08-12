import { IWine } from '@/types/types';

export interface IProps {
  wine: IWine;
  calculateProductPrice: (id: string, price: number) => void;

}

export interface ProductStyledProps {
  quantity?: number;
}
