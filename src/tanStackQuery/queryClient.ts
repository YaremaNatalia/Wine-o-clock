import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
