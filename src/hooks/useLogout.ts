import { operations, queryClient, QueryKeys } from '@/tanStackQuery';
import { useMutation } from '@tanstack/react-query';

const useLogout = () => {
  const {
    mutate: logout,
    isPending: isPendingLogout,
    isError: isLogoutError,
  } = useMutation({
    mutationFn: operations.logout,
    onSuccess: () => {
      queryClient.setQueryData([QueryKeys.token], null);
      queryClient.setQueryData([QueryKeys.isLoggedIn], false);
      queryClient.setQueryData([QueryKeys.user], null);
      queryClient.setQueryData([QueryKeys.isVisited], false);
      queryClient.setQueryData([QueryKeys.cart], null);
      queryClient.setQueryData([QueryKeys.favorites], null);
    },
    onError: (error) => {
      console.error('Logout failed:', error);
    },
  });

  return { logout, isPendingLogout, isLogoutError };
};

export default useLogout;
