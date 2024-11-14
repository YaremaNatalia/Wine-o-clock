import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetCart = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const {
    data: cartWines,
    isLoading: isCartLoading,
    isError: isCartError,
    isFetching: isCartFetching,
  } = useQuery({
    queryFn: () => operations.getCart(),
    queryKey: [QueryKeys.cart],
    enabled: Boolean(isLoggedIn),
    initialData: () => operations.getCartCache(),
  });

  return { cartWines, isCartLoading, isCartError, isCartFetching };
};
export default useGetCart;
