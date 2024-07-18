import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetAllWines = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => operations.getAllWines(1, 0),
    queryKey: [QueryKeys.wines],
  });

  return { data, isLoading, isError };
};
export default useGetAllWines;
