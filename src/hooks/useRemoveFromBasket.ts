import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useMutation } from '@tanstack/react-query';

const useRemoveFromBasket = () => {
  const isToken = false;
  // const isToken = client.getQueryData<string>([QueryKeys.token]);

  const { mutate: mutateRemove } = useMutation({
    mutationFn: (id: string) => operations.removeFromBasket(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    },
  });

  const customMutate = (id: string) => {
    if (isToken) {
      mutateRemove(id);
    } else {
      operations.removeFromBasketCache(id);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
    }
  };

  return { mutateRemove: customMutate };
};

export default useRemoveFromBasket;
