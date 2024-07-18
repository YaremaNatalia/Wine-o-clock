import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { IWine } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useFavoritesMutation = () => {
  const isToken = false; // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { mutate: addToFavorites, isPending: isPendingAdd } = useMutation({
    mutationFn: (wine: IWine) => operations.addToFavorites(wine),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
    },
  });

  const { mutate: removeFromFavorites, isPending: isPendingRemove } =
    useMutation({
      mutationFn: (id: string) => operations.removeFromFavorites(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.favorites] });
      },
    });

  const toggleFavorite = (wine: IWine) => {
    const favoriteWines =
      queryClient.getQueryData<IWine[]>([QueryKeys.favorites]) || [];
    const isFavorite = favoriteWines.some((w) => w._id === wine._id);

    if (isFavorite) {
      if (isToken) {
        removeFromFavorites(wine._id, {
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
      if (isToken) {
        addToFavorites(wine, {
          onSuccess: () =>
            toast.success(`Wine ${wine.title} added to your favorites!`),
        });
      } else {
        const result = operations.addToFavoritesCache(wine);
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
