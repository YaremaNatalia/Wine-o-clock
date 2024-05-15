import { BtnClickEvent } from '@/types/types';

export interface IProps {
  showMobileMenu: boolean;
  onBtnClick: (e: BtnClickEvent) => void;
}
