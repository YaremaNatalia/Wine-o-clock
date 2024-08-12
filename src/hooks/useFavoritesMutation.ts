import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useFavoritesMutation = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: addToFavorites, isPending: isPendingAdd } = useMutation({
    mutationFn: (wine: IWine) => operations.addToFavorites(wine._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
    },
  });

  const { mutate: removeFromFavorites, isPending: isPendingRemove } =
    useMutation({
      mutationFn: (wine: IWine) => operations.removeFromFavorites(wine._id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
      },
    });

  const toggleFavorite = (wine: IWine) => {
    // const favoriteWines =
    //   queryClient.getQueryData<string[]>([QueryKeys.favorites]) || [];
    const favoriteWines = operations.getFavoritesCache() || [];
    const isFavorite = favoriteWines.includes(wine._id);

    if (isFavorite) {
      if (isLoggedIn) {
        removeFromFavorites(wine, {
          onSuccess: () =>
            toast.success(`Wine ${wine.title} removed from your favorites!`),
          onError: () =>
            toast.error(
              `There is some problem with removing wine from your favorites!`
            ),
        });
      } else {
        const result = operations.removeFromFavoritesCache(wine._id);
        if (result) {
          queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
          toast.success(`Wine ${wine.title} removed from your favorites!`);
        } else {
          toast.error(
            `There is some problem with removing wine from your favorites!`
          );
        }
      }
    } else {
      if (isLoggedIn) {
        addToFavorites(wine, {
          onSuccess: () =>
            toast.success(`Wine ${wine.title} added to your favorites!`),
        });
      } else {
        const result = operations.addToFavoritesCache(wine._id);
        if (result) {
          queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
          toast.success(`Wine ${wine.title} added to your favorites!`);
        } else {
          toast.error(
            `There is some problem with adding wine to your favorites!`
          );
        }
      }
    }
  };

  return {
    toggleFavorite,
    isFavoritesPending: isPendingAdd || isPendingRemove,
  };
};

export default useFavoritesMutation;
