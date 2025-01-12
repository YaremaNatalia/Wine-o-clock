import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetAllWines = () => {
  const {
    data,
    isLoading: isGetWinesLoading,
    isFetching: isGetWinesFetching,
    isError: isGetWinesError,
  } = useQuery({
    queryFn: () => operations.getAllWines(1, 0),
    queryKey: [QueryKeys.wines],
  });

  return { data, isGetWinesError, isGetWinesLoading, isGetWinesFetching };
};
export default useGetAllWines;
