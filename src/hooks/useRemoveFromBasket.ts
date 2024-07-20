import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useMutation } from '@tanstack/react-query';

const useRemoveFromBasket = () => {
  const isToken = false;
  // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { mutate: removeFromBasket } = useMutation({
    mutationFn: (id: string) => operations.removeFromBasket(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    },
  });

  const customMutate = (id: string) => {
    if (isToken) {
      removeFromBasket(id);
    } else {
      operations.removeFromBasketCache(id);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    }
  };

  return { removeFromBasket: customMutate };
};

export default useRemoveFromBasket;
