import { operations, QueryKeys } from '@/tanStackQuery';
import { useQuery } from '@tanstack/react-query';

const useGetWineById = (id: string | undefined) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => operations.getWineById(id as string),
    queryKey: [QueryKeys.wineById, id],
    enabled: !!id,
  });

  return { data, isLoading, isError };
};
export default useGetWineById;
