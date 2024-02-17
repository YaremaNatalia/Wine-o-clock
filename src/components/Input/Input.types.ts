import { FormTypes, InputTypes } from '@/constants';
import { ChangeEvent, ReactNode } from 'react';

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
  altElem?: ReactNode;
  checked?: boolean;
  description?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  formType: FormTypes;
}

export interface IStyledCheckboxProps {
  checked: boolean | undefined;
}
