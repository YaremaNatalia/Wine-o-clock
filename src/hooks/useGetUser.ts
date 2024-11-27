import { operations, QueryKeys } from '@/tanStackQuery';
import { IUser } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
  const { data: token } = useQuery<string>({
    queryKey: [QueryKeys.token],
  });
  const {
    data: user,
    isFetching: isUserFetching,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery<IUser | null>({
    queryKey: [QueryKeys.user, token],
    queryFn: () => operations.getPersonalData(token),
    enabled: Boolean(token),
  });
  return {  user, isUserFetching, isUserLoading, isUserError };
};
export default useGetUser;
