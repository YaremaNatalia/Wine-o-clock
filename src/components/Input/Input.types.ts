import { FormTypes, InputTypes } from '@/constants';
import { ChangeEvent } from 'react';

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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  formType: FormTypes;
}
