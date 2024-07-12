import { IWine } from '@/types/types';

export interface IProps {
  wines: IWine[];
  onOrderConfirm: ( id: string, orderNumber?: string,) => void;
}
