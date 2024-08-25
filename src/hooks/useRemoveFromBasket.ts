import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useMutation, useQuery } from '@tanstack/react-query';

const useRemoveFromBasket = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: removeFromBasket } = useMutation({
    mutationFn: (id: string) => operations.removeFromBasket(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    },
  });

  const customMutate = (id: string) => {
    if (isLoggedIn) {
      removeFromBasket(id);
    } else {
      operations.removeFromBasketCache(id);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    }
  };

  return { removeFromBasket: customMutate };
};

export default useRemoveFromBasket;
