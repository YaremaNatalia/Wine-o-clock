import { FormTypes, InputTypes } from '@/constants';

export interface IProps {
  formType: FormTypes;
  settings?: object;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  autoFocus?: boolean;
  label?: string;
  leftDistance?: number;
  type?: InputTypes;
}

export interface IStyledProps {
  formType: FormTypes;
}
