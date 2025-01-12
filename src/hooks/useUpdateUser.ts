import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { INewUser } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useUpdateUser = () => {
  const { mutate: updateUser, isPending: isPendingUpdateUser } = useMutation({
    mutationFn: (userData: INewUser) => operations.updatePersonalData(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.user] });
      toast.success('Your personal data updated successfully');
    },
    onError: () => {
      toast.error('There is some problem with updating your personal data');
    },
  });

  return {
    updateUser,
    isPendingUpdateUser,
  };
};

export default useUpdateUser;
