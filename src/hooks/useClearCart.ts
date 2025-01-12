import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useQuery, useMutation } from '@tanstack/react-query';

const useClearCart = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: clearCart, isPending: isPendingUpdate } = useMutation({
    mutationFn: () => operations.clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
    },
  });

  const handleClearCart = () => {
    if (isLoggedIn) {
      clearCart();
    } else {
      operations.clearCartCache();
      queryClient.invalidateQueries({ queryKey: [QueryKeys.cart] });
    }
  };

  return {
    clearCart: handleClearCart,
    isClearCartPending: isPendingUpdate,
  };
};

export default useClearCart;
