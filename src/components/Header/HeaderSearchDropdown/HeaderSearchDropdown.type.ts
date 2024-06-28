import { IWine } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import { FormData } from '../HeaderSearchInput/HeaderSearchInput.types';
export interface IProps {
  wines: IWine[];
  resetForm: UseFormReset<FormData>;
  setWines: Dispatch<SetStateAction<IWine[]>>;
}
