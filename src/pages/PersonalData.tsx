

import Loader from '@/components/Loader';
import { FC } from 'react';
import NotFoundPage from './NotFoundPage';
import { IPage } from '@/types/types';
import PersonalData from '@/components/PersonalData';

const PersonalDataPage: FC<IPage> = ({ isLoading, isFetching, isError }) => {
  if (isLoading) return <Loader />;
  if (isFetching) return <Loader />;
  if (isError) return <NotFoundPage />;
  return <PersonalData />;
};

export default PersonalDataPage;

