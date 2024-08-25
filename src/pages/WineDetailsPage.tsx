import Loader from '@/components/Loader';
import WineDetails from '@/components/WineDetails';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import useGetWineById from '@/hooks/useGetWineById';

const WineDetailsPage: FC = () => {
  const { wineId } = useParams<{ wineId: string }>();
  const { data, isLoading, isError } = useGetWineById(wineId);

  if (!wineId) {
    return <NotFoundPage />;
  }
  if (isLoading) return <Loader />;
  if (isError) {
    return <NotFoundPage />;
  }
  if (!data) return <NotFoundPage />;
  return <WineDetails wine={data} />;
};

export default WineDetailsPage;
