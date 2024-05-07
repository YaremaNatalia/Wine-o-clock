import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IProps } from './PublicRoute.types';
import { PagePaths } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/tanStackQuery';

export const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
    gcTime: Infinity,
  });
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = location.state?.from ?? PagePaths.homePath;

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
