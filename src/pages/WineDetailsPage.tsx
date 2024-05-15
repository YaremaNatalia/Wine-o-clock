import Loader from '@/components/Loader';
import WineDetails from '@/components/WineDetails';
import { QueryKeys, operations } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const WineDetailsPage: FC = () => {
  const { wineId } = useParams();

  const { data, isLoading, isError } = useQuery<IWine>({
    queryFn: () =>
      wineId
        ? operations.getWineById(wineId)
        : Promise.reject('ID is undefined'),
    queryKey: [QueryKeys.wineById],
    refetchOnMount: true,
  });

  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }
  if (!data) return null;



  return <>{data && <WineDetails wine={data} />}</>;
};

export default WineDetailsPage;
