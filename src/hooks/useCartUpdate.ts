import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useQuery, useMutation } from '@tanstack/react-query';
import { IAddBasketMutation, IWine } from '@/types/types';
import toast from 'react-hot-toast';

const useCartUpdate = (wine: IWine, amount: number) => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: updateCart, isPending: isPendingUpdate } = useMutation({
    mutationFn: (data: IAddBasketMutation) =>
      operations.updateCart(data.wine._id, data.amount ?? 1),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      toast.success(`Wine ${wine.title} updated in your cart!`);
    },
    onError: () => {
      toast.error(`There was a problem updating wine in your cart!`);
    },
  });

  const handleUpdate = () => {
    const isInCart = operations
      .getCartCache()
      ?.some((item) => item.productId === wine._id);

    if (!isInCart) {
      toast.error(`There was a problem updating wine in your cart!`);
      return;
    }

    if (isLoggedIn) {
      updateCart({ wine, amount });
    } else {
      operations.addToCartCache(wine._id, amount);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      toast.success(`Wine ${wine.title} updated in your cart!`);
    }
  };

  handleUpdate();

  return {
    updateCart,
    isCartPending: isPendingUpdate,
  };
};

export default useCartUpdate;
