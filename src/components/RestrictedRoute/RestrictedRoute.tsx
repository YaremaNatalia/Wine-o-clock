import { FC } from 'react';
import { IProps } from './RestrictedRoute.types';

export const RestrictedRoute: FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  return Component;
};
