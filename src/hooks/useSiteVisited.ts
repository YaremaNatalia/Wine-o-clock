import {  queryClient, QueryKeys } from "@/tanStackQuery";

const useSiteVisited = () => {
  const isVisited =
    queryClient.getQueryData<boolean>([QueryKeys.isVisited]) ?? false;
  const setVisited = () => {
    queryClient.setQueryData([QueryKeys.isVisited], true);
  };

  return { isVisited, setVisited };
};
export default useSiteVisited;