import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { IAddBasketMutation } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useAddToBasket = () => {
  const { data: isLoggedIn } = useQuery<boolean>({
    queryKey: [QueryKeys.isLoggedIn],
  });

  const { mutate: addToBasket, isPending } = useMutation({
    mutationFn: ({ wine, numbToOrder }: IAddBasketMutation) =>
      operations.addToBasket(wine, numbToOrder),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
      toast.success(`Wine ${variables.wine.title} added to your cart!`);
    },
    onError: () => {
      toast.error('Sorry, not enough wine in stock');
    },
  });

  const customMutate = ({ wine, numbToOrder }: IAddBasketMutation) => {
    if (isLoggedIn) {
      addToBasket({ wine, numbToOrder });
    } else {
      const result = operations.addToBasketCache(wine, numbToOrder);
      if (result) {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.basket] });
        toast.success(`Wine ${wine.title} added to your cart!`);
      } else toast.error('Sorry, not enough wine in stock');
    }
  };

  return { addToBasket: customMutate, isPending };
};

export default useAddToBasket;
