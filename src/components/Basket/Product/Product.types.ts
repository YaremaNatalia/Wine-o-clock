export interface IProps {
  productId: string;
  amount:number;
  updatePrice: (id: string, price: number) => void;
}

export interface ProductStyledProps {
  quantity?: number;
}
