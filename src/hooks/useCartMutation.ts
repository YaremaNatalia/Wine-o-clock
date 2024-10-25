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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
    },
  });

  const { mutate: removeFromCart, isPending: isPendingRemove } = useMutation({
    mutationFn: (id: string) => operations.removeFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
    },
  });

  const mutateCart = ({
    wine,
    amount,
    action,
  }: IAddBasketMutation & { action: 'add' | 'remove' | 'toggle' }) => {
    const cartWines = operations.getCartCache() || [];
    const isInCart = cartWines.find((item) => item.productId === wine._id);

    if (action === 'add') {
      if (isLoggedIn) {
        addToCart({ wine, amount });
      } else {
        operations.addToCartCache(wine._id, amount ?? 1);
        queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      }
      toast.success(`Wine ${wine.title} added to your cart!`);
    } else if (action === 'remove') {
      if (isLoggedIn) {
        removeFromCart(wine._id);
      } else {
        operations.removeFromCartCache(wine._id);
        queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
      }
      toast.success(`Wine ${wine.title} removed from your cart!`);
    } else if (action === 'toggle') {
      if (isInCart) {
        mutateCart({ wine, amount, action: 'remove' });
      } else {
        mutateCart({ wine, amount, action: 'add' });
      }
    }
  };

  return {
    mutateCart,
    isCartPending: isPendingAdd || isPendingRemove,
  };
};

export default useCartMutation;
