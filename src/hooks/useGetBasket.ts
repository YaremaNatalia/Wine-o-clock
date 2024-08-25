import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetBasket = () => {
  const isToken = false;
  // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { data: basketWines, isLoading: isBasketLoading, isError: isBasketError, isFetching: isBasketFetching } = useQuery({
    queryFn: () => operations.getBasket(1, 0),
    queryKey: [QueryKeys.basket],
    enabled: isToken,
    initialData: () => operations.getBasketCache(),
  });

  return { basketWines, isBasketLoading, isBasketError, isBasketFetching };
};
export default useGetBasket;
