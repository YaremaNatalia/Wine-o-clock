import { FC } from 'react';
import { IProps } from './PrivateRoute.types';
import { Navigate, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';
import { QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to={PagePaths.logInPath} state={{ from: location }} />
  );
};

export default PrivateRoute;
