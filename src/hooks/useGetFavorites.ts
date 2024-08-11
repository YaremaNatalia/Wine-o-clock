import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetFavorites = () => {
  const isToken = false;
  // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { data: favoritesWines, isLoading: isFavoritesLoading, isError: isFavoritesError, isFetching: isFavoritesFetching } = useQuery({
    queryFn: () => operations.getFavorites(),
    queryKey: [QueryKeys.favorites],
    enabled: isToken,
    initialData: () => operations.getFavoritesCache(),
  });
  return {
    favoritesWines,
    isFavoritesLoading,
    isFavoritesError,
    isFavoritesFetching,
  };
};
export default useGetFavorites;
