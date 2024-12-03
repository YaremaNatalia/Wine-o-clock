import { IUser } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';

export interface IProps {
  user: IUser | undefined | null;
  onSubmit: SubmitHandler<IUser>;
}
