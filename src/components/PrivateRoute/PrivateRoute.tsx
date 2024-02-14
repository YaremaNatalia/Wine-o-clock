import { FC, useState } from 'react';
import { IProps } from './PrivateRoute.types';
import { Navigate, useLocation } from 'react-router-dom';
import { PagePaths } from '@/constants';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const [isLoggedIn] = useState<boolean>(false);
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to={PagePaths.logInPath} state={{ from: location }} />
  );
};

export default PrivateRoute;
