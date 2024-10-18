export interface IProps {
  productId: string;
  amount: number;
  productPrice: (id: string, price: number) => void;
}

export interface ProductStyledProps {
  quantity?: number;
}
