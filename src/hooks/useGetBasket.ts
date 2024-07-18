import { operations, QueryKeys } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const useGetBasket = () => {
  const isToken = false;
  // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { data, isLoading, isError, isFetching } = useQuery<IWine[]>({
    queryFn: () => operations.getBasket(1, 0),
    queryKey: [QueryKeys.basket],
    enabled: isToken,
    initialData: () => operations.getBasketCache(),
  });

  return { data, isLoading, isFetching, isError };
};
export default useGetBasket;
