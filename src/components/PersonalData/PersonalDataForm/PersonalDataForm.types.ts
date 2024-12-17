import { INewUser } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';

export interface IProps {
  onSubmit: SubmitHandler<INewUser>;

}
