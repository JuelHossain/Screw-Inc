import axios from "axios";
import { useQuery } from "react-query";

const usePageCount = (size) => {
     const { data: c,isLoading:counting,refetch:recount } = useQuery("productCounts", () =>
       axios(`/productCounts`)
     );
  const productCount = c?.data?.count;
  const count = Math.ceil(productCount / size);
  return { count, counting, recount }
  
}
export default usePageCount;