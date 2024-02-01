import { FormTypes } from '@/constants';

export interface IProps {
  formType: FormTypes;
  settings?: object;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  autoFocus?: boolean;
  label?: string;
  leftDistance?: number;
}

export interface IStyledProps {
  formType: FormTypes;
}
