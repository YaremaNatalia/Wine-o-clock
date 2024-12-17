import { operations, QueryKeys } from '@/tanStackQuery';
import { IUser } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
// import toast from 'react-hot-toast';

const useGetUser = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });

  const {
    data: user,
    isFetching: isUserFetching,
    isLoading: isUserLoading,
    isError: isUserError,
    // isSuccess: isUserSuccess,
    // error,
  } = useQuery<IUser | null>({
    queryKey: [QueryKeys.user],
    queryFn: () => operations.getPersonalData(token),
    enabled: Boolean(token),
  });

  // if (isUserSuccess && user) {
  //   toast.success(`Welcome back, ${user.firstName || 'User'}!`);
  // }

  // if (isUserError) {
  //   toast.error('Failed to load your personal data. Please try again.');
  //   console.error('Error fetching user data:', error);
  // }

  return { user, isUserFetching, isUserLoading, isUserError };
};

export default useGetUser;
