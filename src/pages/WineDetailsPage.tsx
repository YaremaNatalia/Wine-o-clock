import Loader from '@/components/Loader';
import WineDetails from '@/components/WineDetails';
import { QueryKeys, operations } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';



const WineDetailsPage: FC = () => {
  // const id = 5;
  // const { id } = useParams();
  
  // const { data, isLoading, isError } = useQuery<IWine>({
  //   queryFn: () =>
  //     id
  //       ? operations.getWineById(parseInt(id))
  //       : Promise.reject('ID is undefined'),
  //   queryKey: [QueryKeys.wineById],
  // });

  // if (isLoading) return <Loader />;
  // if (isError) {
  //   return <NotFoundPage />;
  // }
  // if (!data) return null;

  // const wineById = data?.data?.find((wine: IWine) => wine.id === Number(id));
  const wineById = false;


  return <>{wineById && <WineDetails wine={wineById} />}</>;
};

export default WineDetailsPage;
