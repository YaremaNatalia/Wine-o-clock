import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useQuery, useMutation } from '@tanstack/react-query';
import { IAddBasketMutation } from '@/types/types';
import toast from 'react-hot-toast';

const useCartMutation = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: addToCart, isPending: isPendingAdd } = useMutation({
    mutationFn: (data: IAddBasketMutation) =>
      operations.addToCart(data.wine._id, data.amount),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      toast.success(`Wine ${variables.wine.title} removed from your cart!`);
    },
    onError: () => {
      toast.error('There is some problem with updating your cart');
    },
  });

  const { mutate: removeFromCart, isPending: isPendingRemove } = useMutation({
    mutationFn: (data: { id: string; title: string }) =>
      operations.removeFromCart(data.id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      toast.success(`Wine ${variables.title} removed from your cart!`);
    },
    onError: () => {
      toast.error('There is some problem with updating your cart');
    },
  });

  const mutateCart = ({
    wine,
    amount = 1,
    action,
  }: IAddBasketMutation & { action: 'add' | 'remove' | 'toggle' }) => {
    const isInCart = operations
      .getCartCache()
      ?.some((item) => item.productId === wine._id);

    if (action === 'add') {
      if (isLoggedIn) {
        addToCart({ wine, amount });
      } else {
        operations.addToCartCache(wine._id, amount);
        queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
        toast.success(`Wine ${wine.title} added to your cart!`);
      }
    } else if (action === 'remove') {
      if (isLoggedIn) {
        removeFromCart({ id: wine._id, title: wine.title });
      } else {
        operations.removeFromCartCache(wine._id);
        queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
        toast.success(`Wine ${wine.title} removed from your cart!`);
      }
    } else if (action === 'toggle') {
      if (isInCart) {
        if (isLoggedIn) {
          removeFromCart({ id: wine._id, title: wine.title });
        } else {
          operations.removeFromCartCache(wine._id);
          toast.success(`Wine ${wine.title} removed from your cart!`);
        }
      } else {
        if (isLoggedIn) {
          addToCart({ wine, amount });
        } else {
          operations.addToCartCache(wine._id, amount);
          toast.success(`Wine ${wine.title} added to your cart!`);
        }
      }
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
    }
  };

  return {
    mutateCart,
    isCartPending: isPendingAdd || isPendingRemove,
  };
};

export default useCartMutation;
