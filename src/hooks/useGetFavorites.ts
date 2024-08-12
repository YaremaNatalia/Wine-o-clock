import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetFavorites = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const {
    data: favoritesWines,
    isLoading: isFavoritesLoading,
    isError: isFavoritesError,
    isFetching: isFavoritesFetching,
  } = useQuery({
    queryFn: () => operations.getFavorites(),
    queryKey: [QueryKeys.favorites],
    enabled: Boolean(isLoggedIn),
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
