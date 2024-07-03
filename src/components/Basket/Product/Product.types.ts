import { IWine } from "@/types/types";


export interface IProps {
  wine: IWine;
  calculateProductPrice: (price: number) => void;
}

export interface ProductStyledProps {
  quantity?: number;
}